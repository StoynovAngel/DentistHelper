package com.dentist.Server.controller;

import com.dentist.Server.exceptions.ResponseWrapper;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserController {
    private UserService userService;

    @PostMapping("/addUser")
    public ResponseEntity<ResponseWrapper<UserEntity>> addUser(@RequestBody UserEntity user){
        try{
            userService.addUser(user);
            ResponseWrapper<UserEntity> response = new ResponseWrapper<>(user, "success", "User registered successfully");
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }catch (Exception e){
            ResponseWrapper<UserEntity> errorResponse = new ResponseWrapper<>("error", "Failed to register user");
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
