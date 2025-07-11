package com.example.fullstack.service;

import com.example.fullstack.dto.request.post.PostCreateRequest;
import com.example.fullstack.dto.request.post.PostUpdateRequest;
import com.example.fullstack.entity.Post;
import com.example.fullstack.entity.PostStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IPostService {
    Page<Post> getAllPosts(Pageable pageable);

    Post getPostById(Long id);

    Post savePost(PostCreateRequest request);

    Post updatePost(PostUpdateRequest request);

    void deletePost(Long id);

    Page<Post> getPublishedPosts(Pageable pageable);

    Page<Post> getPostsByAuthor(Long authorId, Pageable pageable);

    Page<Post> searchPost(String title, Pageable pageable);

    Page<Post> getPostsByCategory(Long categoryId, Pageable pageable);

    Page<Post> getPostsByStatus(PostStatus status, Pageable pageable);

    Page<Post> getPublishedPostsByAuthor(Long authorId, Pageable pageable);

    void publishPost(Long id);

    void archivedPost(Long id);
}
