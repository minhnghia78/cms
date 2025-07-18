import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { showSuccessNotification, showErrorNotification, showInfoNotification } from '../store';
import { LoginCredentials, RegisterData } from '../store/types';

export const useAuth = () => {
  const {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login: loginAction,
    register: registerAction,
    logout: logoutAction,
    refreshToken,
    clearError,
  } = useAuthStore();

  // Auto-refresh token on mount if user is authenticated
  useEffect(() => {
    if (isAuthenticated && token) {
      refreshToken();
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      await loginAction(credentials);
      showSuccessNotification('Login Successful', `Welcome back, ${credentials.username}!`);
    } catch (error: any) {
      showErrorNotification('Login Failed', error.message || 'Please check your credentials and try again.');
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      await registerAction(data);
      showSuccessNotification('Registration Successful', `Welcome to the CMS, ${data.firstName}!`);
    } catch (error: any) {
      showErrorNotification('Registration Failed', error.message || 'Please check your information and try again.');
      throw error;
    }
  };

  const logout = () => {
    logoutAction();
    showInfoNotification('Logout', 'You have been successfully logged out.');
  };

  const isAdmin = user?.role === 'ADMIN';
  const isUser = user?.role === 'USER';

  return {
    // State
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    isAdmin,
    isUser,

    // Actions
    login,
    register,
    logout,
    refreshToken,
    clearError,
  };
}; 