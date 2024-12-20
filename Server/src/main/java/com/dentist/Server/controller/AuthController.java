package com.dentist.Server.controller;

import com.dentist.Server.dto.UserRegistrationDTO;
import com.dentist.Server.dto.UserResponseDTO;
import com.dentist.Server.wrapper.ResponseWrapper;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ResponseWrapper<UserResponseDTO>> register(@Valid @RequestBody UserRegistrationDTO userDTO, @RequestParam(value = "captchaToken", required = false) String captchaToken) {
        ResponseWrapper<UserResponseDTO> response = authService.register(userDTO, captchaToken);
        HttpStatus status = response.getStatus().equals("success") ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return new ResponseEntity<>(response, status);
    }


    @PostMapping("/login")
    public ResponseEntity<ResponseWrapper<Map<String, Object>>> login(@RequestBody UserEntity loginUser, @RequestParam(value = "captchaToken", required = false) String captchaToken) {
        ResponseWrapper<Map<String, Object>> response = authService.login(loginUser, captchaToken);
        HttpStatus status = response.getStatus().equals("success") ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return new ResponseEntity<>(response, status);
    }
}
