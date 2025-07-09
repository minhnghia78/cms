package com.example.fullstack.dto.request;

import com.example.fullstack.entity.UserRole;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserCreateRequest {
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private UserRole role;
}