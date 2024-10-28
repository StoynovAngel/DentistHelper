package com.dentist.Server.util;

import com.dentist.Server.exceptions.ResponseWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseEntityUtil {
    public static <T> ResponseEntity<ResponseWrapper<T>> from(ResponseWrapper<T> responseWrapper) {
        if ("success".equalsIgnoreCase(responseWrapper.getStatus())) {
            HttpStatus status = responseWrapper.getMessage().contains("created") ? HttpStatus.CREATED : HttpStatus.OK;
            return new ResponseEntity<>(responseWrapper, status);
        } else {
            return new ResponseEntity<>(responseWrapper, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
