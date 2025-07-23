package com.example.fullstack.security.impl;

import com.example.fullstack.entity.UserRole;
import com.example.fullstack.security.ITokenResolver;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class TokenResolver implements ITokenResolver {

    private String SECRET_KEY_STRING = "super_private_secret_key_string_of_minh_nghia_can_not_by_pass";

    private SecretKey SECRET_KEY = Keys.hmacShaKeyFor(SECRET_KEY_STRING.getBytes(StandardCharsets.UTF_8));

    private final long EXPIRATION_TIME = 3600000;

    @Override
    public String generate(String username, UserRole roles) {
        Map<String, Object> claims = new HashMap<>();
        if (roles != null){
            claims.put("roles",roles);
        }
        return Jwts.builder()
                .subject(username)
                .claim("roles", roles)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SECRET_KEY)
                .compact();
    }

    @Override
    public Map<String, Object> verify(String token) {
        return Jwts.parser()
                .verifyWith(SECRET_KEY)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
