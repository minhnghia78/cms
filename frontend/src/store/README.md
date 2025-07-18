# Zustand Store Implementation

This directory contains the complete state management implementation using Zustand for the CMS project.

## Store Architecture

### Core Stores

#### 1. `authStore.ts` - Authentication Management
- **Purpose**: Manages user authentication state, JWT tokens, and user sessions
- **Features**:
  - Login/Register with JWT token handling
  - Automatic token refresh with axios interceptors
  - Persistent storage using localStorage
  - Role-based access control (ADMIN/USER)
  - Comprehensive error handling

```typescript
import { useAuthStore } from './store';

const { user, isAuthenticated, login, logout } = useAuthStore();
```

#### 2. `categoryStore.ts` - Category Management
- **Purpose**: Handles CRUD operations for content categories
- **Features**:
  - Fetch all categories
  - Create, update, delete categories
  - Individual category selection
  - Loading states and error handling

```typescript
import { useCategoryStore } from './store';

const { categories, fetchCategories, createCategory } = useCategoryStore();
```

#### 3. `postStore.ts` - Post Management
- **Purpose**: Manages posts with full CRUD operations and pagination
- **Features**:
  - Paginated post listing
  - Create, update, delete posts
  - Post status management (DRAFT/PUBLISHED/ARCHIVED)
  - Category filtering
  - Author-based permissions

```typescript
import { usePostStore } from './store';

const { posts, pagination, fetchPosts, createPost } = usePostStore();
```

#### 4. `uiStore.ts` - UI State Management
- **Purpose**: Manages application UI state and user preferences
- **Features**:
  - Theme switching (light/dark)
  - Sidebar collapse state
  - Notification system with auto-dismiss
  - Persistent UI preferences

```typescript
import { useUIStore } from './store';

const { theme, toggleTheme, addNotification } = useUIStore();
```

### Custom Hooks

#### `useAuth.ts`
Provides a convenient interface to the auth store with user-friendly notifications:

```typescript
import { useAuth } from '../hooks';

const { 
  user, 
  isAuthenticated, 
  isAdmin, 
  login, 
  logout 
} = useAuth();
```

#### `useNotifications.ts`
Integrates the notification system with Ant Design's notification component:

```typescript
import { useNotifications } from '../hooks';

// Automatically handles notification display
useNotifications();
```

### Utility Functions

The store exports several utility functions for common operations:

```typescript
import { 
  showSuccessNotification,
  showErrorNotification,
  isAdmin,
  isAuthenticated,
  getCurrentUser,
  initializeStore 
} from './store';
```

## Usage Examples

### Authentication Flow

```typescript
import { useAuth } from '../hooks';

const LoginComponent = () => {
  const { login, isLoading, error } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      // Success notification is automatically shown
    } catch (error) {
      // Error notification is automatically shown
    }
  };
};
```

### Managing Categories

```typescript
import { useCategoryStore } from '../store';

const CategoryManager = () => {
  const { 
    categories, 
    isLoading, 
    fetchCategories, 
    createCategory 
  } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreate = async (data) => {
    await createCategory(data);
    // Categories list automatically updates
  };
};
```

### Post Management with Pagination

```typescript
import { usePostStore } from '../store';

const PostList = () => {
  const { 
    posts, 
    pagination, 
    isLoading, 
    fetchPosts 
  } = usePostStore();

  const loadPage = (page: number) => {
    fetchPosts(page, 10); // page, size
  };

  const loadByCategory = (categoryId: number) => {
    fetchPosts(0, 10, categoryId);
  };
};
```

### UI State Management

```typescript
import { useUIStore } from '../store';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useUIStore();

  return (
    <Button onClick={toggleTheme}>
      Current: {theme}
    </Button>
  );
};
```

### Notifications

```typescript
import { showSuccessNotification, showErrorNotification } from '../store';

const SomeComponent = () => {
  const handleSuccess = () => {
    showSuccessNotification('Success!', 'Operation completed successfully');
  };

  const handleError = () => {
    showErrorNotification('Error!', 'Something went wrong');
  };
};
```

## TypeScript Support

All stores are fully typed with comprehensive TypeScript interfaces:

- `User`, `AuthState` - Authentication types
- `Category`, `CategoryState` - Category management types
- `Post`, `PostState` - Post management types
- `UIState`, `Notification` - UI state types
- `ApiResponse<T>`, `PaginatedResponse<T>` - API response types

## Integration Features

### Axios Integration
- Automatic token injection in request headers
- Token refresh on 401 responses
- Request/response interceptors for error handling

### Ant Design Integration
- Notification system uses Ant Design's notification component
- Theme state can be used to configure Ant Design themes
- Form validation integrates with store error states

### Persistence
- Authentication state persists across browser sessions
- UI preferences (theme, sidebar state) persist
- Automatic restoration on app initialization

## Best Practices

1. **Use custom hooks**: Prefer `useAuth()` over direct store access
2. **Handle loading states**: Always show loading indicators during async operations
3. **Error handling**: Let the stores handle errors and show appropriate notifications
4. **Type safety**: Use TypeScript interfaces for all data operations
5. **Store initialization**: Call `initializeStore()` in main.tsx for proper setup

## Demo Component

See `components/ZustandExample.tsx` for a comprehensive example of all store features in action. 