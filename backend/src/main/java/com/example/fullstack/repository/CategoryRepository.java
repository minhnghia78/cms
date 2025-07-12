package com.example.fullstack.repository;

import com.example.fullstack.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Page<Category> findByIsActive(Boolean isActive, Pageable pageable);

    boolean findCategoryByName(String name);

    Page<Category> findByNameContaining(String name, Pageable pageable);

    boolean existsByName(String name);
}