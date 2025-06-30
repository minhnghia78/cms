package com.example.fullstack.service;

import com.example.fullstack.entity.User;
import com.example.fullstack.entity.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IUserService {
    Page<User> findAll(Pageable pageable);

    Page<User> getActiveUsers(Pageable pageable);

    Page<User> getUsersByRole(UserRole role, Pageable pageable);

    User getUserById(Long id);

    User saveUser(User user);

    User updateUser(User user);

    void deleteUser(Long id);
}
