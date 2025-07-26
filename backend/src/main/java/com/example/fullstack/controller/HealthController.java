package com.example.fullstack.controller;

import com.example.fullstack.dto.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<ApiResponse> health() {
//        return ResponseEntity.ok(new ApiResponse("CMS Backend is running!", "SUCCESS"));
        return null;
    }
} 