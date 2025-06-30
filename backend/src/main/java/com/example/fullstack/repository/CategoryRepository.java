package com.example.fullstack.repository;

import com.example.fullstack.entity.Category;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findBySlug(String slug);
    List<Category> findByIsActive(Boolean isActive);
    boolean existsBySlug(String slug);
    boolean existsByName(String name);
} 