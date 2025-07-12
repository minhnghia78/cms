package com.example.fullstack.mapper;

import com.example.fullstack.dto.response.CategoryResponse;
import com.example.fullstack.entity.Category;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {
    public CategoryResponse toCategoryResponse(Category category) {
        if (category == null) {
            return null;
        }
        CategoryResponse categoryResponse = new CategoryResponse();
        categoryResponse.setId(category.getId());
        categoryResponse.setName(category.getName());
        categoryResponse.setDescription(category.getDescription());
        categoryResponse.setIsActive(category.getIsActive());
        return categoryResponse;
    }
}
