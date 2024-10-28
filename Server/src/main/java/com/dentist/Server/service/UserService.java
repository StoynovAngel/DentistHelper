package com.dentist.Server.service;

import com.dentist.Server.enums.UserType;
import com.dentist.Server.exceptions.ResponseWrapper;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.repository.UserRepo;
import com.dentist.Server.util.ResponseWrapperUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepo userRepo;
    private final PasswordEncoder encoder;
    public ResponseWrapper<UserEntity> addUser(UserEntity user) {
        if (user.getRole() == null) {
            user.setRole(UserType.PATIENT);
        }
        user.setPassword(encoder.encode(user.getPassword()));
        try {
            userRepo.save(user);
            return ResponseWrapperUtil.createSuccessResponse(user, "Successfully registered.");
        } catch (Exception e) {
            return ResponseWrapperUtil.createErrorResponse("Failed to register user.");
        }
    }
    public ResponseWrapper<UserEntity> login(UserEntity loginUser){
        UserEntity storedUser = userRepo.findByUsername(loginUser.getUsername());
        if(storedUser != null && encoder.matches(loginUser.getPassword(), storedUser.getPassword())){
            return ResponseWrapperUtil.createSuccessResponse(storedUser, "Successfully logged in.");
        } else {
            return ResponseWrapperUtil.createErrorResponse("User not found or invalid password.");
        }
    }
}
