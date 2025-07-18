// Store exports
export { useAuthStore } from './authStore';
export { useCategoryStore } from './categoryStore';
export { usePostStore } from './postStore';
export { useUIStore } from './uiStore';

// Type exports
export type {
  User,
  AuthState,
  LoginCredentials,
  RegisterData,
  Category,
  CategoryState,
  CreateCategoryData,
  Post,
  PostState,
  CreatePostData,
  UpdatePostData,
  UIState,
  Notification,
  ApiResponse,
  PaginatedResponse,
} from './types';

// Utility functions for store operations
import { useAuthStore } from './authStore';
import { useUIStore } from './uiStore';

/**
 * Initialize the store with authentication token if available
 */
export const initializeStore = () => {
  const { token, user } = useAuthStore.getState();
  
  // Set axios authorization header if token exists
  if (token && user) {
    import('axios').then(axios => {
      axios.default.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    });
  }
};

/**
 * Clear all store data (useful for logout or reset)
 */
export const clearAllStores = () => {
  useAuthStore.getState().logout();
  useUIStore.getState().clearNotifications();
};

/**
 * Show success notification
 */
export const showSuccessNotification = (title: string, message: string) => {
  useUIStore.getState().addNotification({
    type: 'success',
    title,
    message,
  });
};

/**
 * Show error notification
 */
export const showErrorNotification = (title: string, message: string) => {
  useUIStore.getState().addNotification({
    type: 'error',
    title,
    message,
  });
};

/**
 * Show warning notification
 */
export const showWarningNotification = (title: string, message: string) => {
  useUIStore.getState().addNotification({
    type: 'warning',
    title,
    message,
  });
};

/**
 * Show info notification
 */
export const showInfoNotification = (title: string, message: string) => {
  useUIStore.getState().addNotification({
    type: 'info',
    title,
    message,
  });
};

/**
 * Check if user has admin role
 */
export const isAdmin = (): boolean => {
  const { user } = useAuthStore.getState();
  return user?.role === 'ADMIN';
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const { isAuthenticated } = useAuthStore.getState();
  return isAuthenticated;
};

/**
 * Get current user
 */
export const getCurrentUser = () => {
  const { user } = useAuthStore.getState();
  return user;
}; 