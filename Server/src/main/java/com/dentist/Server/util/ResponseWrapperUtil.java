package com.dentist.Server.util;

import com.dentist.Server.wrapper.ResponseWrapper;

public class ResponseWrapperUtil {
    public static <T> ResponseWrapper<T> createSuccessResponse(T data, String message) {
        return new ResponseWrapper<>(data, "success", message);
    }

    public static <T> ResponseWrapper<T> createErrorResponse(String message) {
        return new ResponseWrapper<>(null, "error", message);
    }
}
