package com.example.fullstack.controller;


import com.example.fullstack.dto.request.authentication.LoginRequest;
import com.example.fullstack.dto.request.authentication.RegisterRequest;
import com.example.fullstack.dto.request.user.UserCreateRequest;
import com.example.fullstack.dto.response.ApiResponse;
import com.example.fullstack.dto.response.AuthenticationResponse;
import com.example.fullstack.entity.User;
import com.example.fullstack.entity.UserRole;
import com.example.fullstack.security.impl.TokenResolver;
import com.example.fullstack.service.impl.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    private final TokenResolver tokenResolver;

    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> authentication (@RequestBody LoginRequest loginRequest){
        User user = userService.getUserByUsername(loginRequest.getUsername());
        if(user == null){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }
        String token = tokenResolver.generate(user.getUsername(), user.getRole());
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setToken(token);

        return ResponseEntity.ok(new ApiResponse<>("200", authenticationResponse, "Login successfully"));
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<Void>> register (@RequestBody RegisterRequest request){
        UserCreateRequest userCreateRequest = new UserCreateRequest();
        userCreateRequest.setUsername(request.getUsername());
        userCreateRequest.setPassword(request.getPassword());
        userCreateRequest.setEmail(request.getEmail());
        userCreateRequest.setFirstName(request.getFirstName());
        userCreateRequest.setLastName(request.getLastName());
        userCreateRequest.setRole(UserRole.USER);

        userService.saveUser(userCreateRequest);
        return ResponseEntity.ok(new ApiResponse<>("201", null, "Create account successfully"));
    }
}
