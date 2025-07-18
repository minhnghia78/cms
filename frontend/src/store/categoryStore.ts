import { create } from 'zustand';
import axios from 'axios';
import { CategoryState, Category, CreateCategoryData, ApiResponse } from './types';

interface CategoryActions {
  fetchCategories: () => Promise<void>;
  fetchCategoryById: (id: number) => Promise<void>;
  createCategory: (data: CreateCategoryData) => Promise<void>;
  updateCategory: (id: number, data: Partial<CreateCategoryData>) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
  setCurrentCategory: (category: Category | null) => void;
}

type CategoryStore = CategoryState & CategoryActions;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const useCategoryStore = create<CategoryStore>((set, get) => ({
  // Initial State
  categories: [],
  currentCategory: null,
  isLoading: false,
  error: null,

  // Actions
  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.get<ApiResponse<Category[]>>(`${API_BASE_URL}/categories`);
      
      if (response.data.success) {
        set({
          categories: response.data.data,
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error(response.data.message || 'Failed to fetch categories');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch categories';
      set({
        categories: [],
        isLoading: false,
        error: errorMessage,
      });
    }
  },

  fetchCategoryById: async (id: number) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.get<ApiResponse<Category>>(`${API_BASE_URL}/categories/${id}`);
      
      if (response.data.success) {
        set({
          currentCategory: response.data.data,
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error(response.data.message || 'Failed to fetch category');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch category';
      set({
        currentCategory: null,
        isLoading: false,
        error: errorMessage,
      });
    }
  },

  createCategory: async (data: CreateCategoryData) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.post<ApiResponse<Category>>(`${API_BASE_URL}/categories`, data);
      
      if (response.data.success) {
        const newCategory = response.data.data;
        set(state => ({
          categories: [...state.categories, newCategory],
          isLoading: false,
          error: null,
        }));
      } else {
        throw new Error(response.data.message || 'Failed to create category');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to create category';
      set({
        isLoading: false,
        error: errorMessage,
      });
      throw error;
    }
  },

  updateCategory: async (id: number, data: Partial<CreateCategoryData>) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.put<ApiResponse<Category>>(`${API_BASE_URL}/categories/${id}`, data);
      
      if (response.data.success) {
        const updatedCategory = response.data.data;
        set(state => ({
          categories: state.categories.map(category => 
            category.id === id ? updatedCategory : category
          ),
          currentCategory: state.currentCategory?.id === id ? updatedCategory : state.currentCategory,
          isLoading: false,
          error: null,
        }));
      } else {
        throw new Error(response.data.message || 'Failed to update category');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to update category';
      set({
        isLoading: false,
        error: errorMessage,
      });
      throw error;
    }
  },

  deleteCategory: async (id: number) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.delete<ApiResponse<void>>(`${API_BASE_URL}/categories/${id}`);
      
      if (response.data.success) {
        set(state => ({
          categories: state.categories.filter(category => category.id !== id),
          currentCategory: state.currentCategory?.id === id ? null : state.currentCategory,
          isLoading: false,
          error: null,
        }));
      } else {
        throw new Error(response.data.message || 'Failed to delete category');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to delete category';
      set({
        isLoading: false,
        error: errorMessage,
      });
      throw error;
    }
  },

  clearError: () => set({ error: null }),

  setLoading: (loading: boolean) => set({ isLoading: loading }),

  setCurrentCategory: (category: Category | null) => set({ currentCategory: category }),
})); 