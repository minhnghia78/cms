package com.example.fullstack.controller;

import com.example.fullstack.dto.request.post.PostCreateRequest;
import com.example.fullstack.dto.request.post.PostUpdateRequest;
import com.example.fullstack.dto.response.ApiResponse;
import com.example.fullstack.dto.response.PostResponse;
import com.example.fullstack.entity.Post;
import com.example.fullstack.entity.PostStatus;
import com.example.fullstack.mapper.PostMapper;
import com.example.fullstack.service.impl.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    private final PostMapper postMapper;

    @GetMapping
    public ResponseEntity<ApiResponse<Page<PostResponse>>> getAllPosts(Pageable pageable) {
        Page<Post> posts = postService.getAllPosts(pageable);
        Page<PostResponse> postResponses = posts.map(postMapper::toPostResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", postResponses, null));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<PostResponse>> getPostById(@PathVariable Long id) {
        Post post = postService.getPostById(id);
        PostResponse postResponse = postMapper.toPostResponse(post);

        return ResponseEntity.ok(new ApiResponse<>("200", postResponse, null));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<PostResponse>> createPost(@RequestBody PostCreateRequest request) {
        Post createdPost = postService.savePost(request);
        PostResponse postResponse = postMapper.toPostResponse(createdPost);
        return ResponseEntity.ok(new ApiResponse<>("201", postResponse, "Create Post successfully"));
    }

    @PutMapping
    public ResponseEntity<ApiResponse<PostResponse>> updatePost(@RequestBody PostUpdateRequest request) {
        Post updatedPost = postService.updatePost(request);
        PostResponse postResponse = postMapper.toPostResponse(updatedPost);

        return ResponseEntity.ok(new ApiResponse<>("200", postResponse, "Update Post successfully"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deletePost(@PathVariable Long id) {
        postService.deletePost(id);
        return ResponseEntity.ok(new ApiResponse<>("204", null, "Delete Post successfully"));
    }

    @PatchMapping("/{id}/publish")
    public ResponseEntity<ApiResponse<Void>> publishPost(@PathVariable Long id) {
        postService.publishPost(id);
        return ResponseEntity.ok(new ApiResponse<>("204", null, "Publish Post successfully"));
    }

    @PatchMapping("/{id}/archive")
    public ResponseEntity<ApiResponse<Void>> archivePost(@PathVariable Long id) {
        postService.archivedPost(id);
        return ResponseEntity.ok(new ApiResponse<>("204", null, "Archive Post successfully"));
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<Page<PostResponse>>> searchPost(@RequestParam String title, Pageable pageable) {
        Page<Post> posts = postService.searchPost(title, pageable);
        Page<PostResponse> postResponses = posts.map(postMapper::toPostResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", postResponses, null));
    }

    @GetMapping("/author/{authorId}")
    public ResponseEntity<ApiResponse<Page<PostResponse>>> getPostsByAuthor(@PathVariable Long authorId, Pageable pageable) {
        Page<Post> posts = postService.getPostsByAuthor(authorId, pageable);
        Page<PostResponse> postResponses = posts.map(postMapper::toPostResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", postResponses, null));
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<ApiResponse<Page<PostResponse>>> getPostsByCategory(@PathVariable Long categoryId, Pageable pageable) {
        Page<Post> posts = postService.getPostsByCategory(categoryId, pageable);
        Page<PostResponse> postResponses = posts.map(postMapper::toPostResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", postResponses, null));
    }

    @GetMapping("/published")
    public ResponseEntity<ApiResponse<Page<PostResponse>>> getPublishedPosts(Pageable pageable) {
        Page<Post> posts = postService.getPublishedPosts(pageable);
        Page<PostResponse> postResponses = posts.map(postMapper::toPostResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", postResponses, null));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<ApiResponse<Page<PostResponse>>> getPostsByStatus(@PathVariable PostStatus status, Pageable pageable) {
        Page<Post> posts = postService.getPostsByStatus(status, pageable);
        Page<PostResponse> postResponses = posts.map(postMapper::toPostResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", postResponses, null));
    }

    @GetMapping("/published/{authorId}")
    public ResponseEntity<ApiResponse<Page<PostResponse>>> getPublishedPostsByAuthor(@PathVariable Long authorId, Pageable pageable) {
        Page<Post> posts = postService.getPublishedPostsByAuthor(authorId, pageable);
        Page<PostResponse> postResponses = posts.map(postMapper::toPostResponse);
        return ResponseEntity.ok(new ApiResponse<>("200", postResponses, null));
    }
//
//    @GetMapping("/check-slug/{slug}")
//    public ResponseEntity<Boolean> checkSlugExists(@PathVariable String slug) {
//        boolean exists = postService.existsBySlug(slug);
//        return ResponseEntity.ok(exists);
//    }
}