package com.jupitters.employee_ms.exception;

public class ResourceNotFoundException extends RuntimeException{
    ResourceNotFoundException(String message) {
        super(message);
    }
}
