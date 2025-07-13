package com.example.fullstack.security;

import com.example.fullstack.entity.UserRole;

import java.util.Map;

public interface ITokenResolver {
    public String generate(String username, UserRole roles);

    Map<String, Object> verify(String token);
}
