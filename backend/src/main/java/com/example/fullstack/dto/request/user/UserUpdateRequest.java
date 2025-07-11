package com.example.fullstack.dto.request.user;

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
