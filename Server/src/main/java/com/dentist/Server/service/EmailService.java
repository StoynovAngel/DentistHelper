package com.dentist.Server.service;

import com.dentist.Server.model.EmailDetails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    @Value("${spring.mail.username}")
    private String email;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(EmailDetails emailDetails) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(emailDetails.getSender());
        mailMessage.setTo(email);
        mailMessage.setSubject(emailDetails.getSubject());
        mailMessage.setText(emailDetails.getMsgBody());

        mailSender.send(mailMessage);
    }
}