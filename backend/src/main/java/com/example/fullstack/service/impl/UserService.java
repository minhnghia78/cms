package com.example.fullstack.service.impl;

import com.example.fullstack.dto.request.UserCreateRequest;
import com.example.fullstack.dto.request.UserUpdateRequest;
import com.example.fullstack.dto.response.UserResponse;
import com.example.fullstack.entity.User;
import com.example.fullstack.entity.UserRole;
import com.example.fullstack.repository.UserRepository;
import com.example.fullstack.service.IUserService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService implements IUserService {

    private final UserRepository userRepository;

    @Override
    public Page<User> findAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public Page<User> getActiveUsers(Pageable pageable) {
        return userRepository.findByIsActive(true, pageable);
    }

    @Override
    public Page<User> getUsersByRole(UserRole role, Pageable pageable) {
        return userRepository.findByRole(role, pageable);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("User not found!!!"));
    }

    @Override
    public User saveUser(UserCreateRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new EntityExistsException("Username already existed!");
        }
        User createdUser = new User();
        createdUser.setUsername(request.getUsername());
        createdUser.setPassword(request.getPassword());
        createdUser.setEmail(request.getEmail());
        createdUser.setFirstName(request.getFirstName());
        createdUser.setLastName(request.getLastName());
        createdUser.setRole(request.getRole());

        return userRepository.save(createdUser);

    }

    @Override
    public User updateUser(UserUpdateRequest request) {
        return userRepository.findById(request.getId())
                .map(existingUser -> {
                    existingUser.setPassword(request.getPassword());
                    existingUser.setFirstName(request.getFirstName());
                    existingUser.setLastName(request.getLastName());
                    return userRepository.save(existingUser);
                })
                .orElseThrow(() -> new EntityNotFoundException("User not found!!!"));
    }

    @Override
    public void deleteUser(Long id) {
         userRepository.findById(id)
                .ifPresentOrElse(userRepository::delete,
                        () -> new EntityNotFoundException("User not found!!!") );
    }
}