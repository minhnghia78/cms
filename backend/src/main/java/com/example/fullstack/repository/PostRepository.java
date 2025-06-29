package com.example.fullstack.repository;

import com.example.fullstack.entity.Post;
import com.example.fullstack.entity.PostStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Optional<Post> findBySlug(String slug);
    List<Post> findByStatus(PostStatus status);
    List<Post> findByAuthorId(Long authorId);
    List<Post> findByCategoryId(Long categoryId);
    List<Post> findByAuthorIdAndStatus(Long authorId, PostStatus status);
    List<Post> findByCategoryIdAndStatus(Long categoryId, PostStatus status);
    
    @Query("SELECT p FROM Post p WHERE p.author.id = :authorId")
    List<Post> findPostsByAuthor(@Param("authorId") Long authorId);
    
    @Query("SELECT p FROM Post p WHERE p.category.id = :categoryId")
    List<Post> findPostsByCategory(@Param("categoryId") Long categoryId);
    
    @Query("SELECT p FROM Post p WHERE p.status = 'PUBLISHED' ORDER BY p.publishedAt DESC")
    List<Post> findPublishedPosts();
    
    boolean existsBySlug(String slug);
} 