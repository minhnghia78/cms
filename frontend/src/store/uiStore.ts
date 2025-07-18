import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UIState, Notification } from './types';

interface UIActions {
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

type UIStore = UIState & UIActions;

export const useUIStore = create<UIStore>()(
  persist(
    (set, get) => ({
      // Initial State
      sidebarCollapsed: false,
      theme: 'light',
      notifications: [],

      // Actions
      toggleSidebar: () => 
        set(state => ({ sidebarCollapsed: !state.sidebarCollapsed })),

      setSidebarCollapsed: (collapsed: boolean) => 
        set({ sidebarCollapsed: collapsed }),

      toggleTheme: () => 
        set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

      setTheme: (theme: 'light' | 'dark') => 
        set({ theme }),

      addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => {
        const newNotification: Notification = {
          ...notification,
          id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: Date.now(),
        };

        set(state => ({
          notifications: [...state.notifications, newNotification]
        }));

        // Auto-remove notification after 5 seconds
        setTimeout(() => {
          get().removeNotification(newNotification.id);
        }, 5000);
      },

      removeNotification: (id: string) =>
        set(state => ({
          notifications: state.notifications.filter(n => n.id !== id)
        })),

      clearNotifications: () => 
        set({ notifications: [] }),
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        theme: state.theme,
      }),
    }
  )
); 