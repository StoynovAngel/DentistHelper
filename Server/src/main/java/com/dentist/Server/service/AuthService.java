package com.dentist.Server.service;

import com.dentist.Server.dto.UserRegistrationDTO;
import com.dentist.Server.dto.UserResponseDTO;
import com.dentist.Server.model.enums.UserType;
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

@Service
@AllArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserRepo userRepo;
    private final PasswordEncoder encoder;
    private final RecaptchaService recaptchaService;

    public ResponseWrapper<UserResponseDTO> register(UserRegistrationDTO userDTO, String captchaToken) {
        boolean isCaptchaValid = recaptchaService.verifyCaptcha(captchaToken);
        if (!isCaptchaValid) {
            return ResponseWrapperUtil.createErrorResponse("Invalid reCAPTCHA.");
        }


        UserEntity user = new UserEntity();

        user.setUsername(userDTO.getUsername());
        user.setFirstname(userDTO.getFirstname());
        user.setLastname(userDTO.getLastname());
        user.setEmail(userDTO.getEmail());
        user.setPassword(encoder.encode(userDTO.getPassword()));
        user.setAge(userDTO.getAge());
        user.setRole(UserType.PATIENT);

        if(userRepo.existsByEmail(user.getEmail())) {
            return ResponseWrapperUtil.createErrorResponse("Email is taken.");
        }

        if(userRepo.existsByUsername(user.getUsername())){
            return ResponseWrapperUtil.createErrorResponse("Username is taken.");
        }

        try {
            userRepo.save(user);

            UserResponseDTO responseDTO = new UserResponseDTO();
            BeanUtils.copyProperties(user, responseDTO);
            return ResponseWrapperUtil.createSuccessResponse(responseDTO, "Successfully registered.");
        } catch (Exception e) {
            return ResponseWrapperUtil.createErrorResponse("Failed to register user.");
        }
    }

    public ResponseWrapper<Map<String, Object>> login(UserEntity loginUser, String captchaToken) {
        boolean isCaptchaValid = recaptchaService.verifyCaptcha(captchaToken);
        if (!isCaptchaValid) {
            return ResponseWrapperUtil.createErrorResponse("Invalid reCAPTCHA.");
        }

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
            return ResponseWrapperUtil.createErrorResponse("Incorrect username or password");
        }
    }

}
