package com.example.fullstack.exception;

import com.example.fullstack.dto.response.ApiResponse;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Order(2)
public class UserExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    ResponseEntity<ApiResponse> handlingUserNotFoundException(EntityNotFoundException exception){
        ApiResponse response = new ApiResponse();
        response.setStatusCode("404");
        response.setMessage(exception.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @ExceptionHandler(EntityExistsException.class)
    ResponseEntity<ApiResponse> handlingUserExistsException(EntityExistsException exception){
        ApiResponse response = new ApiResponse();
        response.setStatusCode("400");
        response.setMessage(exception.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
}
