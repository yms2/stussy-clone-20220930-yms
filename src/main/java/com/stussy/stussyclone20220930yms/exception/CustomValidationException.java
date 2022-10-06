package com.stussy.stussyclone20220930yms.exception;

import lombok.Getter;

import java.util.Map;

@Getter
public class CustomValidationException extends RuntimeException {

    private Map<String, String> errorMap;

    public CustomValidationException(String message, Map<String,String> errorMap){
        super(message);
        //super = RuntimeException
        this.errorMap = errorMap;
    }


}
