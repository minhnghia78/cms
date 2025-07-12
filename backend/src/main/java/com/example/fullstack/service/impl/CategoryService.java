package com.example.fullstack.service.impl;

import com.example.fullstack.dto.request.category.CategoryCreateRequest;
import com.example.fullstack.dto.request.category.CategoryUpdateRequest;
import com.example.fullstack.entity.Category;
import com.example.fullstack.repository.CategoryRepository;
import com.example.fullstack.service.ICategoryService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CategoryService implements ICategoryService {

    private final CategoryRepository categoryRepository;


    @Override
    public Page<Category> getAllCategories(Pageable pageable) {
        return categoryRepository.findAll(pageable);
    }

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found"));
    }

    @Override
    public Category saveCategory(CategoryCreateRequest request) {
        if (categoryRepository.existsByName(request.getName())) {
            throw new EntityExistsException("Category already exists");
        }
        Category category = new Category();
        category.setName(request.getName());
        category.setDescription(request.getDescription());

        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(CategoryUpdateRequest request) {
        return categoryRepository.findById(request.getId())
                .map(category -> {
                    category.setName(request.getName());
                    category.setDescription(request.getDescription());
                    category.setIsActive(request.getIsActive());
                    return categoryRepository.save(category);
                })
                .orElseThrow(() -> new EntityNotFoundException("Category not found"));
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.findById(id)
                .ifPresentOrElse(categoryRepository::delete,
                        () -> {
                            throw new EntityNotFoundException("Category not found");
                        });
    }

    @Override
    public Page<Category> getCategoryByName(String categoryName, Pageable pageable) {
        return categoryRepository.findByNameContaining(categoryName, pageable);
    }

    @Override
    public Page<Category> getCategoryByIsActive(Boolean isActive, Pageable pageable) {
        return categoryRepository.findByIsActive(isActive, pageable);
    }

    @Override
    public void activeCategory(Long id) {
        categoryRepository.findById(id)
                .ifPresentOrElse(category -> {
                    category.setIsActive(true);
                    categoryRepository.save(category);
                }, ()-> {
                    throw new EntityNotFoundException("Category not found");
                });
    }

    @Override
    public void deactiveCategory(Long id) {
        categoryRepository.findById(id)
                .ifPresentOrElse(category -> {
                    category.setIsActive(false);
                    categoryRepository.save(category);
                }, ()-> {
                    throw new EntityNotFoundException("Category not found");
                });
    }
}