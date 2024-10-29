package com.dentist.Server.service;

import com.dentist.Server.dto.UserRegistrationDTO;
import com.dentist.Server.dto.UserResponseDTO;
import com.dentist.Server.enums.UserType;
import com.dentist.Server.exceptions.ResponseWrapper;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.repository.UserRepo;
import com.dentist.Server.util.ResponseWrapperUtil;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.HashMap;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private UserRepo userRepo;
    private final PasswordEncoder encoder;

    public ResponseWrapper<UserResponseDTO> register(UserRegistrationDTO userDTO) {
        UserEntity user = new UserEntity();

        user.setUsername(userDTO.getUsername());
        user.setFirstname(userDTO.getFirstname());
        user.setLastname(userDTO.getLastname());
        user.setEmail(userDTO.getEmail());
        user.setPassword(encoder.encode(userDTO.getPassword()));
        user.setAge(userDTO.getAge());
        user.setRole(UserType.PATIENT);

        try {
            userRepo.save(user);

            UserResponseDTO responseDTO = new UserResponseDTO();
            BeanUtils.copyProperties(user, responseDTO);
            return ResponseWrapperUtil.createSuccessResponse(responseDTO, "Successfully registered.");
        } catch (Exception e) {
            return ResponseWrapperUtil.createErrorResponse("Failed to register user.");
        }
    }

    public ResponseWrapper<Map<String, Object>> login(UserEntity loginUser) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword())
            );
            UserEntity authenticatedUser = (UserEntity) authentication.getPrincipal();
            String jwtToken = jwtService.generateToken(authenticatedUser);
            Map<String, Object> responseData = new HashMap<>();
            responseData.put("user", authenticatedUser);
            responseData.put("token", jwtToken);

            return ResponseWrapperUtil.createSuccessResponse(responseData, "Successfully logged in.");

        } catch (AuthenticationException e) {
            return ResponseWrapperUtil.createErrorResponse("User not found or invalid password.");
        }
    }

}