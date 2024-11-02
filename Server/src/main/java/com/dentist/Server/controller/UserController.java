package com.dentist.Server.controller;

import com.dentist.Server.wrapper.ResponseWrapper;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.service.UserService;
import com.dentist.Server.util.ResponseEntityUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/add")
    public ResponseEntity<ResponseWrapper<UserEntity>> addUser(@RequestBody UserEntity user) {
        ResponseWrapper<UserEntity> response = userService.addUser(user);
        return ResponseEntityUtil.from(response);
    }
}
