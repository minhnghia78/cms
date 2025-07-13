package com.example.fullstack.security;

import com.example.fullstack.security.impl.TokenResolver;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.*;

@RequiredArgsConstructor
public class MyAuthenticationFilter extends OncePerRequestFilter {

    private final TokenResolver tokenResolver;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if(request.getHeader("Authorization") == null) {
            filterChain.doFilter(request, response);
            return;
        }
        String token = request.getHeader("Authorization")
                .replace("Bearer ", "");
        try{
            Map<String, Object> claims = tokenResolver.verify(token);
            String principle = claims.get("sub").toString();
            String roles = (String) claims.get("roles");
            GrantedAuthority authority = new SimpleGrantedAuthority(roles);
            Collection<? extends GrantedAuthority> authorities = Collections.singletonList(authority);

            Authentication authentication = new UsernamePasswordAuthenticationToken(
                    principle,
                    token,
                    authorities
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }catch (Exception e){
            logger.info(e.getMessage());
        }finally {
            filterChain.doFilter(request, response);
        }
    }
}
