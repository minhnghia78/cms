package com.example.fullstack.service;

import com.example.fullstack.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICategoryService {
    Page<Category> findAll(Pageable pageable);

    Category findById(Long id);

    Category saveCategory(Category category);

    Category updateCategory(Category category);

    void deleteCategory(Category category);

    Page<Category> findByCategoryName(String categoryName, Pageable pageable);

    Page<Category> findActiveCategory(Pageable pageable);
}
