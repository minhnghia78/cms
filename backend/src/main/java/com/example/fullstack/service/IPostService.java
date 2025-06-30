package com.example.fullstack.service;

import com.example.fullstack.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IPostService {
    Page<Post> listAllPosts(Pageable pageable);

    Post getPostById(Long id);

    Post savePost(Post post);

    Post updatePost(Post post);

    void deletePost(Long id);

    Page<Post> getPostsByAuthor(Long authorId, Pageable pageable);

    Page<Post> searchPost(String search, Pageable pageable);

    Page<Post> getPostsByCategory(Long categoryId, Pageable pageable);

    Page<Post> getPostsByStatus(String status, Pageable pageable);

}
