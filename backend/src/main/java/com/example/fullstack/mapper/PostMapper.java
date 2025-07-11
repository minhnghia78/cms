package com.example.fullstack.mapper;

import com.example.fullstack.dto.response.PostResponse;
import com.example.fullstack.entity.Post;
import org.springframework.stereotype.Component;

@Component
public class PostMapper {
    public PostResponse toPostResponse(Post post) {
        if (post == null) {
            return null;
        }
        PostResponse response = new PostResponse();
        response.setId(post.getId());
        response.setTitle(post.getTitle());
        response.setContent(post.getContent());
        response.setSlug(post.getSlug());
        response.setExcerpt(post.getExcerpt());
        response.setFeaturedImage(post.getFeaturedImage());
        response.setAuthor(post.getAuthor());
        response.setCategory(post.getCategory());
        response.setPublishedAt(post.getPublishedAt());

        return response;
    }
}
