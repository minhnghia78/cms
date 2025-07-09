package com.example.fullstack.controller;

import com.example.fullstack.dto.request.UserCreateRequest;
import com.example.fullstack.dto.request.UserUpdateRequest;
import com.example.fullstack.dto.response.ApiResponse;
import com.example.fullstack.dto.response.UserResponse;
import com.example.fullstack.entity.User;
import com.example.fullstack.mapper.UserMapper;
import com.example.fullstack.service.IUserService;
import com.example.fullstack.service.impl.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class UserController {

    private final IUserService userService;
    private final UserMapper userMapper;

    @GetMapping
    public ResponseEntity<ApiResponse<Page<UserResponse>>> getAllUsers(Pageable pageable) {
        Page<User> users = userService.findAll(pageable);
        Page<UserResponse> userResponses = users.map(userMapper::toUserResponse);

        return ResponseEntity.ok(new ApiResponse<>("200", userResponses, null));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponse>> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        UserResponse userResponse = userMapper.toUserResponse(user);

        return ResponseEntity.ok(new ApiResponse<>("200", userResponse, null));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<UserResponse>> createUser(@RequestBody UserCreateRequest request) {
        User createdUser = userService.saveUser(request);
        UserResponse userResponse = userMapper.toUserResponse(createdUser);
        return ResponseEntity.ok(new ApiResponse<>("201", userResponse, "Created user successfully"));
    }
//
    @PutMapping
    public ResponseEntity<ApiResponse<UserResponse>> updateUser(@RequestBody UserUpdateRequest request) {
       User updatedUser = userService.updateUser(request);
       UserResponse userResponse = userMapper.toUserResponse(updatedUser);

       return ResponseEntity.ok(new ApiResponse<>("200", userResponse, "Update user information successfully"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok(new ApiResponse<>("204", null, "Delete user successfully"));
    }
//
//    @GetMapping("/active")
//    public ResponseEntity<List<UserDto>> getActiveUsers() {
//        List<UserDto> activeUsers = userService.getActiveUsers();
//        return ResponseEntity.ok(activeUsers);
//    }
//
//    @GetMapping("/role/{role}")
//    public ResponseEntity<List<UserDto>> getUsersByRole(@PathVariable String role) {
//        List<UserDto> users = userService.getUsersByRole(role);
//        return ResponseEntity.ok(users);
//    }
//
//    @GetMapping("/check-username/{username}")
//    public ResponseEntity<Boolean> checkUsernameExists(@PathVariable String username) {
//        boolean exists = userService.existsByUsername(username);
//        return ResponseEntity.ok(exists);
//    }
//
//    @GetMapping("/check-email/{email}")
//    public ResponseEntity<Boolean> checkEmailExists(@PathVariable String email) {
//        boolean exists = userService.existsByEmail(email);
//        return ResponseEntity.ok(exists);
//    }
} 