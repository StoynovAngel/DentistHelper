package com.dentist.Server.controller;

import com.dentist.Server.dto.UserRegistrationDTO;
import com.dentist.Server.dto.UserResponseDTO;
import com.dentist.Server.exceptions.ResponseWrapper;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.service.AuthService;
import com.dentist.Server.service.JwtService;
import com.dentist.Server.service.UserService;
import com.dentist.Server.util.ResponseEntityUtil;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ResponseWrapper<UserResponseDTO>> register(@Valid @RequestBody UserRegistrationDTO userDTO) {
        ResponseWrapper<UserResponseDTO> response = authService.register(userDTO);
        HttpStatus status = response.getStatus().equals("success") ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return new ResponseEntity<>(response, status);
    }


    @PostMapping("/login")
    public ResponseEntity<ResponseWrapper<Map<String, Object>>> login(@RequestBody UserEntity loginUser) {
        ResponseWrapper<Map<String, Object>> response = authService.login(loginUser);
        HttpStatus status = response.getStatus().equals("success") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return new ResponseEntity<>(response, status);
    }
}
