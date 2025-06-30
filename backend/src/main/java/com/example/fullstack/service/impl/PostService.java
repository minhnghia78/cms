package com.example.fullstack.service.impl;

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
import com.example.fullstack.service.IPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostService implements IPostService {

    private final PostRepository postRepository;

    private final UserRepository userRepository;

    private final CategoryRepository categoryRepository;


    @Override
    public Page<Post> listAllPosts(Pageable pageable) {
        return null;
    }

    @Override
    public Post getPostById(Long id) {
        return null;
    }

    @Override
    public Post savePost(Post post) {
        return null;
    }

    @Override
    public Post updatePost(Post post) {
        return null;
    }

    @Override
    public void deletePost(Long id) {

    }

    @Override
    public Page<Post> getPostsByAuthor(Long authorId, Pageable pageable) {
        return null;
    }

    @Override
    public Page<Post> searchPost(String search, Pageable pageable) {
        return null;
    }

    @Override
    public Page<Post> getPostsByCategory(Long categoryId, Pageable pageable) {
        return null;
    }

    @Override
    public Page<Post> getPostsByStatus(String status, Pageable pageable) {
        return null;
    }
}