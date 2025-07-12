package com.example.fullstack.dto.response;

import com.example.fullstack.entity.Category;
import com.example.fullstack.entity.PostStatus;
import com.example.fullstack.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostResponse {
    private Long id;
    private String title;
    private String slug;
    private String content;
    private String excerpt;
    private String featuredImage;
    private PostStatus status;
    private String author;
    private String category;
    private ZonedDateTime publishedAt;
}
