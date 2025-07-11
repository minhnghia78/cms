package com.example.fullstack.dto.request.post;

import com.example.fullstack.entity.Category;
import com.example.fullstack.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostCreateRequest {
    private String title;
    private String slug;
    private String content;
    private String excerpt;
    private String featuredImage;
    private User author;
    private Category category;

}
