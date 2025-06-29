package com.example.fullstack.service;

import com.example.fullstack.dto.PostDto;
import com.example.fullstack.dto.UserDto;
import com.example.fullstack.dto.CategoryDto;
import com.example.fullstack.entity.Post;
import com.example.fullstack.entity.PostStatus;
import com.example.fullstack.entity.User;
import com.example.fullstack.entity.Category;
import com.example.fullstack.repository.PostRepository;
import com.example.fullstack.repository.UserRepository;
import com.example.fullstack.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<PostDto> getAllPosts() {
        return postRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public Optional<PostDto> getPostById(Long id) {
        return postRepository.findById(id)
                .map(this::convertToDto);
    }

    public PostDto createPost(PostDto postDto) {
        User author = userRepository.findById(postDto.getAuthorId())
                .orElseThrow(() -> new RuntimeException("Author not found"));
        
        Category category = categoryRepository.findById(postDto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        Post post = new Post();
        post.setTitle(postDto.getTitle());
        post.setSlug(postDto.getSlug());
        post.setContent(postDto.getContent());
        post.setExcerpt(postDto.getExcerpt());
        post.setFeaturedImage(postDto.getFeaturedImage());
        post.setStatus(postDto.getStatus());
        post.setAuthor(author);
        post.setCategory(category);
        post.setTags(postDto.getTags());

        if (postDto.getStatus() == PostStatus.PUBLISHED) {
            post.setPublishedAt(LocalDateTime.now());
        }

        Post savedPost = postRepository.save(post);
        return convertToDto(savedPost);
    }

    public Optional<PostDto> updatePost(Long id, PostDto postDto) {
        return postRepository.findById(id)
                .map(post -> {
                    User author = userRepository.findById(postDto.getAuthorId())
                            .orElseThrow(() -> new RuntimeException("Author not found"));
                    
                    Category category = categoryRepository.findById(postDto.getCategoryId())
                            .orElseThrow(() -> new RuntimeException("Category not found"));

                    post.setTitle(postDto.getTitle());
                    post.setSlug(postDto.getSlug());
                    post.setContent(postDto.getContent());
                    post.setExcerpt(postDto.getExcerpt());
                    post.setFeaturedImage(postDto.getFeaturedImage());
                    post.setStatus(postDto.getStatus());
                    post.setAuthor(author);
                    post.setCategory(category);
                    post.setTags(postDto.getTags());

                    if (postDto.getStatus() == PostStatus.PUBLISHED && post.getPublishedAt() == null) {
                        post.setPublishedAt(LocalDateTime.now());
                    }
                    
                    Post savedPost = postRepository.save(post);
                    return convertToDto(savedPost);
                });
    }

    public boolean deletePost(Long id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<PostDto> publishPost(Long id) {
        return postRepository.findById(id)
                .map(post -> {
                    post.setStatus(PostStatus.PUBLISHED);
                    post.setPublishedAt(LocalDateTime.now());
                    Post savedPost = postRepository.save(post);
                    return convertToDto(savedPost);
                });
    }

    public Optional<PostDto> archivePost(Long id) {
        return postRepository.findById(id)
                .map(post -> {
                    post.setStatus(PostStatus.ARCHIVED);
                    Post savedPost = postRepository.save(post);
                    return convertToDto(savedPost);
                });
    }

    public List<PostDto> getPostsByAuthor(Long authorId) {
        return postRepository.findPostsByAuthor(authorId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public List<PostDto> getPostsByCategory(Long categoryId) {
        return postRepository.findPostsByCategory(categoryId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public List<PostDto> getPublishedPosts() {
        return postRepository.findPublishedPosts().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public List<PostDto> getPostsByStatus(PostStatus status) {
        return postRepository.findByStatus(status).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public boolean existsBySlug(String slug) {
        return postRepository.existsBySlug(slug);
    }

    private PostDto convertToDto(Post post) {
        UserDto authorDto = new UserDto(
                post.getAuthor().getId(),
                post.getAuthor().getUsername(),
                post.getAuthor().getEmail(),
                post.getAuthor().getFirstName(),
                post.getAuthor().getLastName(),
                post.getAuthor().getRole(),
                post.getAuthor().getIsActive(),
                post.getAuthor().getCreatedAt(),
                post.getAuthor().getUpdatedAt()
        );

        CategoryDto categoryDto = new CategoryDto(
                post.getCategory().getId(),
                post.getCategory().getName(),
                post.getCategory().getSlug(),
                post.getCategory().getDescription(),
                post.getCategory().getIsActive(),
                post.getCategory().getCreatedAt(),
                post.getCategory().getUpdatedAt()
        );

        return new PostDto(
                post.getId(),
                post.getTitle(),
                post.getSlug(),
                post.getContent(),
                post.getExcerpt(),
                post.getFeaturedImage(),
                post.getStatus(),
                post.getAuthor().getId(),
                authorDto,
                post.getCategory().getId(),
                categoryDto,
                post.getTags(),
                post.getPublishedAt(),
                post.getCreatedAt(),
                post.getUpdatedAt()
        );
    }
} 