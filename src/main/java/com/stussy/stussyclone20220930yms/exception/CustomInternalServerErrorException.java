package com.stussy.stussyclone20220930yms.exception;

public class CustomInternalServerErrorException extends RuntimeException {
    public CustomInternalServerErrorException(String message) {
        super(message);
    }
}
