package com.example.fullstack.config;

import com.example.fullstack.security.MyAuthenticationFilter;
import com.example.fullstack.security.impl.TokenResolver;
import org.antlr.v4.runtime.Token;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, MyAuthenticationFilter myAuthenticationFilter) throws Exception {
        return http
                .csrf(CsrfConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("error").permitAll()
                        .requestMatchers("api/auth/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "api/categories/**").permitAll()
                        .requestMatchers("api/categories/**").hasAuthority("ADMIN")
                        .requestMatchers(HttpMethod.GET, "api/posts/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "api/posts/**").hasAuthority("USER")
                        .requestMatchers(HttpMethod.DELETE, "api/posts/**").hasAnyAuthority("USER", "ADMIN" )
                        .requestMatchers("api/posts/**").hasAuthority("ADMIN")
                        .requestMatchers("api/users/**").permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(myAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

        @Bean
        MyAuthenticationFilter myAuthenticationFilter(TokenResolver tokenResolver) throws Exception {
            return new MyAuthenticationFilter(tokenResolver);
        }

        @Bean
        TokenResolver tokenResolver() {
            return new TokenResolver();
        }

        @Bean
        PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }

}
