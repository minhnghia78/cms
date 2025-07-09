//package com.example.fullstack.controller;
//
//import com.example.fullstack.dto.PostDto;
//import com.example.fullstack.service.impl.PostService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/posts")
//@CrossOrigin(origins = "http://localhost:3000")
//public class PostController {
//
//    @Autowired
//    private PostService postService;
//
//    @GetMapping
//    public ResponseEntity<List<PostDto>> getAllPosts() {
//        List<PostDto> posts = postService.getAllPosts();
//        return ResponseEntity.ok(posts);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<PostDto> getPostById(@PathVariable Long id) {
//        return postService.getPostById(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @PostMapping
//    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto) {
//        PostDto createdPost = postService.createPost(postDto);
//        return ResponseEntity.ok(createdPost);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<PostDto> updatePost(@PathVariable Long id, @RequestBody PostDto postDto) {
//        return postService.updatePost(id, postDto)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
//        if (postService.deletePost(id)) {
//            return ResponseEntity.ok().build();
//        }
//        return ResponseEntity.notFound().build();
//    }
//
//    @PatchMapping("/{id}/publish")
//    public ResponseEntity<PostDto> publishPost(@PathVariable Long id) {
//        return postService.publishPost(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @PatchMapping("/{id}/archive")
//    public ResponseEntity<PostDto> archivePost(@PathVariable Long id) {
//        return postService.archivePost(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @GetMapping("/author/{authorId}")
//    public ResponseEntity<List<PostDto>> getPostsByAuthor(@PathVariable Long authorId) {
//        List<PostDto> posts = postService.getPostsByAuthor(authorId);
//        return ResponseEntity.ok(posts);
//    }
//
//    @GetMapping("/category/{categoryId}")
//    public ResponseEntity<List<PostDto>> getPostsByCategory(@PathVariable Long categoryId) {
//        List<PostDto> posts = postService.getPostsByCategory(categoryId);
//        return ResponseEntity.ok(posts);
//    }
//
//    @GetMapping("/published")
//    public ResponseEntity<List<PostDto>> getPublishedPosts() {
//        List<PostDto> posts = postService.getPublishedPosts();
//        return ResponseEntity.ok(posts);
//    }
//
//    @GetMapping("/status/{status}")
//    public ResponseEntity<List<PostDto>> getPostsByStatus(@PathVariable String status) {
//        try {
//            var postStatus = com.example.fullstack.entity.PostStatus.valueOf(status.toUpperCase());
//            List<PostDto> posts = postService.getPostsByStatus(postStatus);
//            return ResponseEntity.ok(posts);
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.badRequest().build();
//        }
//    }
//
//    @GetMapping("/check-slug/{slug}")
//    public ResponseEntity<Boolean> checkSlugExists(@PathVariable String slug) {
//        boolean exists = postService.existsBySlug(slug);
//        return ResponseEntity.ok(exists);
//    }
//}