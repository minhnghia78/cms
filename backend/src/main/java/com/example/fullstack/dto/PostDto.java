package com.example.fullstack.dto;

import com.example.fullstack.entity.PostStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private Long id;
    private String title;
    private String slug;
    private String content;
    private String excerpt;
    private String featuredImage;
    private PostStatus status;
    private Long authorId;
    private UserDto author;
    private Long categoryId;
    private CategoryDto category;
    private List<String> tags;
    private LocalDateTime publishedAt;

} 