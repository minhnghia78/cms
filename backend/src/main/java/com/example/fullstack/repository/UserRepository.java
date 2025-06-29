package com.example.fullstack.repository;

import com.example.fullstack.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    List<User> findByIsActive(Boolean isActive);
    List<User> findByRole(String role);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
} 