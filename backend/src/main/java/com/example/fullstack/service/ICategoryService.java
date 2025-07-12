package com.example.fullstack.service;

import com.example.fullstack.dto.request.category.CategoryCreateRequest;
import com.example.fullstack.dto.request.category.CategoryUpdateRequest;
import com.example.fullstack.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICategoryService {
    Page<Category> getAllCategories(Pageable pageable);

    Category getCategoryById(Long id);

    Category saveCategory(CategoryCreateRequest category);

    Category updateCategory(CategoryUpdateRequest category);

    void deleteCategory(Long id);

    Page<Category> getCategoryByName(String categoryName, Pageable pageable);

    Page<Category> getCategoryByIsActive(Boolean isActive, Pageable pageable);

    void activeCategory(Long id);

    void deactiveCategory(Long id);
}
