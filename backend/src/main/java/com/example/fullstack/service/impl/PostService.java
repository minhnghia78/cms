package com.example.fullstack.service.impl;

import com.example.fullstack.dto.request.post.PostCreateRequest;
import com.example.fullstack.dto.request.post.PostUpdateRequest;
import com.example.fullstack.entity.Post;
import com.example.fullstack.entity.PostStatus;
import com.example.fullstack.repository.PostRepository;
import com.example.fullstack.repository.UserRepository;
import com.example.fullstack.repository.CategoryRepository;
import com.example.fullstack.service.IPostService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@RequiredArgsConstructor
@Service
public class PostService implements IPostService {

    private final PostRepository postRepository;

//    private final UserRepository userRepository;
//
//    private final CategoryRepository categoryRepository;


    @Override
    public Page<Post> getAllPosts(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    @Override
    public Post getPostById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("Post not found with id " + id));
    }

    @Override
    public Post savePost(PostCreateRequest request) {
        if (postRepository.existsBySlug(request.getSlug())) {
            throw new EntityExistsException("Post already exists with Slug " + request.getSlug());
        }
        Post post = new Post();
        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        post.setSlug(request.getSlug());
        post.setExcerpt(request.getExcerpt());
        post.setFeaturedImage(request.getFeaturedImage());
        post.setAuthor(request.getAuthor());
        post.setCategory(request.getCategory());
        post.setStatus(PostStatus.DRAFT);
        return postRepository.save(post);
    }

    @Override
    public Post updatePost(PostUpdateRequest request) {
        return postRepository.findById(request.getId())
                .map((p)->
                {
                    p.setTitle(request.getTitle());
                    p.setContent(request.getContent());
                    p.setExcerpt(request.getExcerpt());
                    p.setFeaturedImage(request.getFeaturedImage());
                    p.setCategory(request.getCategory());
                    return postRepository.save(p);
                })
                .orElseThrow(()-> new EntityNotFoundException("Post not found with id " + request.getId()));
    }

    @Override
    public void deletePost(Long id) {

        postRepository.findById(id).ifPresentOrElse(postRepository::delete,
                () -> {
                    throw new EntityNotFoundException("Post not found with id " + id);
                }) ;
    }

    @Override
    public Page<Post> getPublishedPosts(Pageable pageable) {
        return postRepository.findPublishedPosts(pageable);
    }


    @Override
    public Page<Post> getPostsByAuthor(Long authorId, Pageable pageable) {
        return postRepository.findPostsByAuthor(authorId, pageable);
    }

    @Override
    public Page<Post> searchPost(String search, Pageable pageable) {
        return postRepository.findByTitleContaining(search, pageable);
    }

    @Override
    public Page<Post> getPostsByCategory(Long categoryId, Pageable pageable) {
        return postRepository.findPostsByCategory(categoryId, pageable);
    }

    @Override
    public Page<Post> getPostsByStatus(PostStatus status, Pageable pageable) {
        return postRepository.findByStatus(status, pageable);
    }

    @Override
    public Page<Post> getPublishedPostsByAuthor(Long authorId, Pageable pageable) {
        return postRepository.findByAuthorIdAndStatus(authorId, PostStatus.PUBLISHED, pageable);
    }

    @Override
    public void publishPost(Long id) {
        postRepository.findById(id)
                .map(p -> {
                    p.setStatus(PostStatus.PUBLISHED);
                    p.setPublishedAt(ZonedDateTime.now(ZoneId.of("Asia/Ho_Chi_Minh")));
                   return postRepository.save(p);
                })
                .orElseThrow(()-> new EntityNotFoundException("Post not found with id " + id));
    }

    @Override
    public void archivedPost(Long id) {
        postRepository.findById(id)
                .map(p -> {
                    p.setStatus(PostStatus.ARCHIVED);
                    return postRepository.save(p);
                })
                .orElseThrow(()-> new EntityNotFoundException("Post not found with id " + id));
    }
}