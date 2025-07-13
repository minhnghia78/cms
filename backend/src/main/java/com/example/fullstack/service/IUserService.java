package com.example.fullstack.service;

import com.example.fullstack.dto.request.user.UserCreateRequest;
import com.example.fullstack.dto.request.user.UserUpdateRequest;
import com.example.fullstack.entity.User;
import com.example.fullstack.entity.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IUserService {
    Page<User> getAllUsers(Pageable pageable);

    Page<User> getActiveUsers(Pageable pageable);

    Page<User> getUsersByRole(UserRole role, Pageable pageable);

    User getUserByUsername(String username);

    User getUserById(Long id);

    User saveUser(UserCreateRequest request);

    User updateUser(UserUpdateRequest request);

    void deleteUser(Long id);

    void updateStatusUser(Long id, Boolean status);

}
