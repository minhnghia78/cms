package com.example.fullstack.controller;

import com.example.fullstack.dto.request.category.CategoryCreateRequest;
import com.example.fullstack.dto.request.category.CategoryUpdateRequest;
import com.example.fullstack.dto.response.ApiResponse;
import com.example.fullstack.dto.response.CategoryResponse;
import com.example.fullstack.entity.Category;
import com.example.fullstack.mapper.CategoryMapper;
import com.example.fullstack.service.impl.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    private final CategoryMapper categoryMapper;

    @GetMapping
    public ResponseEntity<ApiResponse<Page<CategoryResponse>>> getAllCategories(Pageable pageable) {
        Page<Category> categories = categoryService.getAllCategories(pageable);
        Page<CategoryResponse> categoryResponses = categories.map(categoryMapper::toCategoryResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", categoryResponses, null));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<CategoryResponse>> getCategoryById(@PathVariable Long id) {
        Category category = categoryService.getCategoryById(id);
        CategoryResponse categoryResponse = categoryMapper.toCategoryResponse(category);
        return ResponseEntity.ok(new ApiResponse<>("200", categoryResponse, null));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<CategoryResponse>> createCategory(@RequestBody CategoryCreateRequest request) {
        Category categoryCreated = categoryService.saveCategory(request);
        CategoryResponse createdCategory = categoryMapper.toCategoryResponse(categoryCreated);
        return ResponseEntity.ok(new ApiResponse<>("201", createdCategory, "Category created successfully"));
    }

    @PutMapping
    public ResponseEntity<ApiResponse<CategoryResponse>> updateCategory(@RequestBody CategoryUpdateRequest request) {
        Category categoryUpdated = categoryService.updateCategory(request);
        CategoryResponse categoryResponse = categoryMapper.toCategoryResponse(categoryUpdated);
        return ResponseEntity.ok(new ApiResponse<>("200", categoryResponse,"Category updated successfully"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok(new ApiResponse<>("204", null, "Category deleted successfully"));
    }

    @GetMapping("/active")
    public ResponseEntity<ApiResponse<Page<CategoryResponse>>> getActiveCategories(Pageable pageable) {
        Page<Category> activeCategories = categoryService.getCategoryByIsActive(true, pageable);
        Page<CategoryResponse> categoryResponses = activeCategories.map(categoryMapper::toCategoryResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", categoryResponses, null));
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<Page<CategoryResponse>>> searchCategories(@RequestParam String categoryName, Pageable pageable) {
        Page<Category> activeCategories = categoryService.getCategoryByName(categoryName, pageable);
        Page<CategoryResponse> categoryResponses = activeCategories.map(categoryMapper::toCategoryResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", categoryResponses, null));
    }

    @PatchMapping("/{id}/active")
    public ResponseEntity<ApiResponse<CategoryResponse>> activateCategory(@PathVariable Long id) {
        categoryService.activeCategory(id);
        return ResponseEntity.ok(new ApiResponse<>("204", null, "Category active successfully"));
    }

    @PatchMapping("/{id}/deactive")
    public ResponseEntity<ApiResponse<CategoryResponse>> deactivateCategory(@PathVariable Long id) {
        categoryService.deactiveCategory(id);
        return ResponseEntity.ok(new ApiResponse<>("204", null, "Category deactivate successfully"));
    }
}