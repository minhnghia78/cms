package com.example.fullstack.service.impl;

import com.example.fullstack.entity.Category;
import com.example.fullstack.repository.CategoryRepository;
import com.example.fullstack.service.ICategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CategoryService implements ICategoryService {

    private final CategoryRepository categoryRepository;


    @Override
    public Page<Category> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Category findById(Long id) {
        return null;
    }

    @Override
    public Category saveCategory(Category category) {
        return null;
    }

    @Override
    public Category updateCategory(Category category) {
        return null;
    }

    @Override
    public void deleteCategory(Category category) {

    }

    @Override
    public Page<Category> findByCategoryName(String categoryName, Pageable pageable) {
        return null;
    }

    @Override
    public Page<Category> findActiveCategory(Pageable pageable) {
        return null;
    }
}