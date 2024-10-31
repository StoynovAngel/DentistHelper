package com.dentist.Server.controller;

import com.dentist.Server.model.EmailDetails;
import com.dentist.Server.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/email")
public class EmailController {

    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody EmailDetails emailDetails) {
        emailService.sendEmail(emailDetails);
        return ResponseEntity.ok("Email sent successfully!");
    }
}