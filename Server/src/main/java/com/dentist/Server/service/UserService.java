package com.dentist.Server.service;

import com.dentist.Server.enums.UserType;
import com.dentist.Server.exceptions.ResponseWrapper;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.repository.UserRepo;
import com.dentist.Server.util.ResponseWrapperUtil;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@AllArgsConstructor
@Transactional
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepo userRepo;
    private final PasswordEncoder encoder;

    public ResponseWrapper<UserEntity> addUser(UserEntity user) {
        if (user.getRole() == null) {
            user.setRole(UserType.PATIENT);
        }
        user.setPassword(encoder.encode(user.getPassword()));

        try {
            logger.info("Attempting to save user: {}", user);
            userRepo.save(user);
            logger.info("User saved successfully: {}", user);
            return ResponseWrapperUtil.createSuccessResponse(user, "Successfully registered.");
        } catch (Exception e) {
            logger.error("Failed to save user: {}", e.getMessage());
            return ResponseWrapperUtil.createErrorResponse("Failed to register user.");
        }
    }
}
