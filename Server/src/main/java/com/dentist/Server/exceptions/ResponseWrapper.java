package com.dentist.Server.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseWrapper<T>{
    private T data;
    private String status;
    private String message;
    private String timestamp;

    public ResponseWrapper(T data, String status, String message) {
        this.data = data;
        this.status = status;
        this.message = message;
        this.timestamp = LocalDateTime.now().toString();
    }

    public ResponseWrapper(String status, String message) {
        this.status = status;
        this.message = message;
        this.timestamp = LocalDateTime.now().toString();
    }


}
