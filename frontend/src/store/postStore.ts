import { create } from 'zustand';
import axios from 'axios';
import { PostState, Post, CreatePostData, UpdatePostData, ApiResponse, PaginatedResponse } from './types';

interface PostActions {
  fetchPosts: (page?: number, size?: number, categoryId?: number, status?: string) => Promise<void>;
  fetchPostById: (id: number) => Promise<void>;
  createPost: (data: CreatePostData) => Promise<void>;
  updatePost: (id: number, data: UpdatePostData) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
  publishPost: (id: number) => Promise<void>;
  archivePost: (id: number) => Promise<void>;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
  setCurrentPost: (post: Post | null) => void;
  setPagination: (page: number, size: number) => void;
}

type PostStore = PostState & PostActions;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const usePostStore = create<PostStore>((set, get) => ({
  // Initial State
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
  pagination: {
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
  },

  // Actions
  fetchPosts: async (page = 0, size = 10, categoryId?: number, status?: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
      });
      
      if (categoryId) params.append('categoryId', categoryId.toString());
      if (status) params.append('status', status);

      const response = await axios.get<ApiResponse<PaginatedResponse<Post>>>(
        `${API_BASE_URL}/posts?${params.toString()}`
      );
      
      if (response.data.success) {
        const { content, ...paginationInfo } = response.data.data;
        set({
          posts: content,
          pagination: paginationInfo,
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error(response.data.message || 'Failed to fetch posts');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch posts';
      set({
        posts: [],
        isLoading: false,
        error: errorMessage,
      });
    }
  },

  fetchPostById: async (id: number) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.get<ApiResponse<Post>>(`${API_BASE_URL}/posts/${id}`);
      
      if (response.data.success) {
        set({
          currentPost: response.data.data,
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error(response.data.message || 'Failed to fetch post');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch post';
      set({
        currentPost: null,
        isLoading: false,
        error: errorMessage,
      });
    }
  },

  createPost: async (data: CreatePostData) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.post<ApiResponse<Post>>(`${API_BASE_URL}/posts`, data);
      
      if (response.data.success) {
        const newPost = response.data.data;
        set(state => ({
          posts: [newPost, ...state.posts],
          pagination: {
            ...state.pagination,
            totalElements: state.pagination.totalElements + 1,
          },
          isLoading: false,
          error: null,
        }));
      } else {
        throw new Error(response.data.message || 'Failed to create post');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to create post';
      set({
        isLoading: false,
        error: errorMessage,
      });
      throw error;
    }
  },

  updatePost: async (id: number, data: UpdatePostData) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.put<ApiResponse<Post>>(`${API_BASE_URL}/posts/${id}`, data);
      
      if (response.data.success) {
        const updatedPost = response.data.data;
        set(state => ({
          posts: state.posts.map(post => 
            post.id === id ? updatedPost : post
          ),
          currentPost: state.currentPost?.id === id ? updatedPost : state.currentPost,
          isLoading: false,
          error: null,
        }));
      } else {
        throw new Error(response.data.message || 'Failed to update post');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to update post';
      set({
        isLoading: false,
        error: errorMessage,
      });
      throw error;
    }
  },

  deletePost: async (id: number) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.delete<ApiResponse<void>>(`${API_BASE_URL}/posts/${id}`);
      
      if (response.data.success) {
        set(state => ({
          posts: state.posts.filter(post => post.id !== id),
          currentPost: state.currentPost?.id === id ? null : state.currentPost,
          pagination: {
            ...state.pagination,
            totalElements: state.pagination.totalElements - 1,
          },
          isLoading: false,
          error: null,
        }));
      } else {
        throw new Error(response.data.message || 'Failed to delete post');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to delete post';
      set({
        isLoading: false,
        error: errorMessage,
      });
      throw error;
    }
  },

  publishPost: async (id: number) => {
    await get().updatePost(id, { status: 'PUBLISHED' });
  },

  archivePost: async (id: number) => {
    await get().updatePost(id, { status: 'ARCHIVED' });
  },

  clearError: () => set({ error: null }),

  setLoading: (loading: boolean) => set({ isLoading: loading }),

  setCurrentPost: (post: Post | null) => set({ currentPost: post }),

  setPagination: (page: number, size: number) => 
    set(state => ({
      pagination: { ...state.pagination, page, size }
    })),
})); 