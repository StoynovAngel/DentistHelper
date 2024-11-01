package com.dentist.Server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SmsRequest {
    private String fromPhoneNumber;
    private String toPhoneNumber;
    private String body;
}
