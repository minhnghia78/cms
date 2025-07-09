package com.example.fullstack.repository;

import com.example.fullstack.entity.User;
import com.example.fullstack.entity.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    Page<User> findByIsActive(Boolean isActive, Pageable pageable);

    Page<User> findByRole(UserRole role, Pageable pageable);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
} 