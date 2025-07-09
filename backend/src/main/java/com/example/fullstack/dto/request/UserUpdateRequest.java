package com.example.fullstack.dto.request;

import com.example.fullstack.entity.UserRole;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserUpdateRequest {
    private Long id;
    private String password;
    private String firstName;
    private String lastName;
}
