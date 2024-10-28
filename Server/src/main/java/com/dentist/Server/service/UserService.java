package com.dentist.Server.service;

import com.dentist.Server.enums.UserType;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepo userRepo;
    private final PasswordEncoder encoder;
    public void addUser(UserEntity user){
        user.setPassword(encoder.encode(user.getPassword()));

        if(user.getRole() == null){
            user.setRole(UserType.PATIENT);
        }

        userRepo.save(user);
    }
}
