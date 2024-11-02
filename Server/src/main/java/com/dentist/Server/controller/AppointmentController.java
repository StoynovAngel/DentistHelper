package com.dentist.Server.controller;

import com.dentist.Server.exceptions.UserNotFoundException;
import com.dentist.Server.model.AppointmentEntity;
import com.dentist.Server.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AppointmentEntity>> getAppointmentsByUser(@PathVariable Long userId){
        try {
            return ResponseEntity.ok(appointmentService.getAppointmentByUser(userId));
        } catch (UserNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
    @PostMapping("/add/{userId}")
    public ResponseEntity<AppointmentEntity> postNewAppointment(@PathVariable Long userId, @RequestBody AppointmentEntity appointmentEntity) {
        try {
            return ResponseEntity.ok(appointmentService.createAppointment(userId, appointmentEntity));
        } catch (UserNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
