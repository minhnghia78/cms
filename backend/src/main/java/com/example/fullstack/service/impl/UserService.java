package com.example.fullstack.service.impl;

import com.example.fullstack.dto.UserDto;
import com.example.fullstack.entity.User;
import com.example.fullstack.entity.UserRole;
import com.example.fullstack.repository.UserRepository;
import com.example.fullstack.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class UserService implements IUserService {

    private final UserRepository userRepository;


    @Override
    public Page<User> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Page<User> getActiveUsers(Pageable pageable) {
        return null;
    }

    @Override
    public Page<User> getUsersByRole(UserRole role, Pageable pageable) {
        return null;
    }

    @Override
    public User getUserById(Long id) {
        return null;
    }

    @Override
    public User saveUser(User user) {
        return null;
    }

    @Override
    public User updateUser(User user) {
        return null;
    }

    @Override
    public void deleteUser(Long id) {

    }
}