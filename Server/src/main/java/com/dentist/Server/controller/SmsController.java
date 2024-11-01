package com.dentist.Server.controller;

import com.dentist.Server.model.SmsRequest;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sms")
public class SmsController {
    @Value("${twilio.send.phone}")
    private String phone;

    @Value("${TWILIO_ACCOUNT_SID}")
    private String sid;

    @Value("${TWILIO_AUTH_TOKEN}")
    private String token;

    @PostMapping("/send")
    public ResponseEntity<String> sendSMS(@RequestBody SmsRequest smsRequest) {
        if (smsRequest == null || smsRequest.getFromPhoneNumber() == null
                || smsRequest.getToPhoneNumber() == null || smsRequest.getBody() == null) {
            return ResponseEntity.badRequest().body("Invalid request data");
        }
        Twilio.init(sid, token);
        String fromNumber = smsRequest.getFromPhoneNumber();
        String toNumber = smsRequest.getToPhoneNumber();
        String msg = smsRequest.getBody();

        Message.creator(new PhoneNumber(toNumber), new PhoneNumber(fromNumber),
                msg).create();

        return ResponseEntity.ok("SMS sent Succesfully !");
    }
}
