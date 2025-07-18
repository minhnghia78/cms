import { useEffect } from 'react';
import { notification } from 'antd';
import { useUIStore } from '../store/uiStore';

export const useNotifications = () => {
  const { notifications, removeNotification, clearNotifications } = useUIStore();

  useEffect(() => {
    // Process new notifications
    notifications.forEach((notif) => {
      const key = notif.id;
      
      // Check if notification is already displayed
      const existingNotifications = notification.destroy;
      
      notification[notif.type]({
        key,
        message: notif.title,
        description: notif.message,
        placement: 'topRight',
        duration: 4.5,
        onClose: () => removeNotification(notif.id),
      });
    });

    // Clean up processed notifications after a delay
    const cleanup = setTimeout(() => {
      notifications.forEach((notif) => {
        removeNotification(notif.id);
      });
    }, 100);

    return () => clearTimeout(cleanup);
  }, [notifications, removeNotification]);

  return {
    notifications,
    clearNotifications,
  };
}; 