import axios from 'axios';
import type { User, UserInput, Post, PostInput, Category, CategoryInput, HealthStatus, ApiResponse } from '../types';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const apiService = {
  // Health check
  async checkHealth(): Promise<HealthStatus> {
    const response = await apiClient.get<HealthStatus>('/health');
    return response.data;
  },

  // User CRUD operations
  async getUsers(): Promise<User[]> {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  },

  async getUser(id: number): Promise<User> {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  },

  async createUser(user: UserInput): Promise<User> {
    const response = await apiClient.post<User>('/users', user);
    return response.data;
  },

  async updateUser(id: number, user: UserInput): Promise<User> {
    const response = await apiClient.put<User>(`/users/${id}`, user);
    return response.data;
  },

  async deleteUser(id: number): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  },

  // Category CRUD operations
  async getCategories(): Promise<Category[]> {
    const response = await apiClient.get<Category[]>('/categories');
    return response.data;
  },

  async getCategory(id: number): Promise<Category> {
    const response = await apiClient.get<Category>(`/categories/${id}`);
    return response.data;
  },

  async createCategory(category: CategoryInput): Promise<Category> {
    const response = await apiClient.post<Category>('/categories', category);
    return response.data;
  },

  async updateCategory(id: number, category: CategoryInput): Promise<Category> {
    const response = await apiClient.put<Category>(`/categories/${id}`, category);
    return response.data;
  },

  async deleteCategory(id: number): Promise<void> {
    await apiClient.delete(`/categories/${id}`);
  },

  // Post CRUD operations
  async getPosts(): Promise<Post[]> {
    const response = await apiClient.get<Post[]>('/posts');
    return response.data;
  },

  async getPost(id: number): Promise<Post> {
    const response = await apiClient.get<Post>(`/posts/${id}`);
    return response.data;
  },

  async createPost(post: PostInput): Promise<Post> {
    const response = await apiClient.post<Post>('/posts', post);
    return response.data;
  },

  async updatePost(id: number, post: PostInput): Promise<Post> {
    const response = await apiClient.put<Post>(`/posts/${id}`, post);
    return response.data;
  },

  async deletePost(id: number): Promise<void> {
    await apiClient.delete(`/posts/${id}`);
  },

  // Additional CMS-specific endpoints
  async getPostsByCategory(categoryId: number): Promise<Post[]> {
    const response = await apiClient.get<Post[]>(`/categories/${categoryId}/posts`);
    return response.data;
  },

  async getPostsByAuthor(authorId: number): Promise<Post[]> {
    const response = await apiClient.get<Post[]>(`/users/${authorId}/posts`);
    return response.data;
  },

  async publishPost(id: number): Promise<Post> {
    const response = await apiClient.patch<Post>(`/posts/${id}/publish`);
    return response.data;
  },

  async archivePost(id: number): Promise<Post> {
    const response = await apiClient.patch<Post>(`/posts/${id}/archive`);
    return response.data;
  },
}; 