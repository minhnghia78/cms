package com.example.fullstack.repository;

import com.example.fullstack.entity.Post;
import com.example.fullstack.entity.PostStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Optional<Post> findBySlug(String slug);
    Page<Post> findByStatus(PostStatus status, Pageable pageable);
    Page<Post> findByAuthorId(Long authorId, Pageable pageable);
    Page<Post> findByCategoryId(Long categoryId, Pageable pageable);
    Page<Post> findByAuthorIdAndStatus(Long authorId, PostStatus status, Pageable pageable);
//    Page<Post> findByCategoryIdAndStatus(Long categoryId, PostStatus status);
    
    @Query("SELECT p FROM Post p WHERE p.author.id = :authorId")
    Page<Post> findPostsByAuthor(@Param("authorId") Long authorId, Pageable pageable);
    
    @Query("SELECT p FROM Post p WHERE p.category.id = :categoryId")
    Page<Post> findPostsByCategory(@Param("categoryId") Long categoryId, Pageable pageable);
    
    @Query("SELECT p FROM Post p WHERE p.status = 'PUBLISHED' ORDER BY p.publishedAt DESC")
    Page<Post> findPublishedPosts(Pageable pageable);

    Page<Post> findByTitleContaining(String title, Pageable pageable);

    boolean existsBySlug(String slug);

}