# System Patterns

## Architecture Overview
```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│   React.js FE   │ ◄─────────────► │  Spring Boot BE │
│   TypeScript    │    JWT Auth     │   + Security    │
│   (Port 3000)   │                 │   (Port 8080)   │
└─────────────────┘                 └─────────────────┘
         │                                   │
         │                                   │
    ┌────▼────┐                        ┌────▼────┐
    │ Axios + │                        │ MySQL + │
    │Tailwind │                        │ MyBatis │
    └─────────┘                        └─────────┘
```

## Key Technical Decisions

### Backend (Spring Boot 3.4.7)
- **Framework**: Spring Boot 3.4.7 with Spring Security + JWT
- **Database**: MySQL with Spring Data JPA + MyBatis
- **Security**: JWT tokens with role-based access control
- **Architecture**: Layered (Controller → Service → Repository → Entity)
- **Validation**: Bean Validation with comprehensive error handling
- **Build Tool**: Maven with Java 21

### Frontend (React + TypeScript)
- **Framework**: React 19.1.0 with TypeScript 5.8.3
- **Build Tool**: Vite 7.0.4 for fast development and builds
- **Styling**: Tailwind CSS 4.1.11 utility-first approach
- **HTTP Client**: Axios (to be added) for API communication
- **State Management**: React Context for auth, local state for components

### Security Architecture
```
┌─────────────┐   JWT Token   ┌──────────────┐   Verify   ┌─────────────┐
│   Frontend  │ ──────────► │   Backend    │ ────────► │    MySQL    │
│  (React)    │             │ (Security    │           │ (User Data) │
│             │ ◄────────── │  Filter)     │ ◄──────── │             │
└─────────────┘  Protected  └──────────────┘  Roles    └─────────────┘
                  Content
```

## Design Patterns

### Backend Patterns
1. **Layered Architecture**: Clear separation of Controller/Service/Repository/Entity
2. **JWT Authentication**: Stateless authentication with TokenResolver
3. **Role-Based Security**: Method-level security with @PreAuthorize
4. **DTO Pattern**: Request/Response DTOs separate from entities
5. **Global Exception Handling**: Centralized error handling with @ControllerAdvice
6. **Repository Pattern**: JPA repositories with custom query methods

### Frontend Patterns (To Be Implemented)
1. **Component Architecture**: Functional components with TypeScript interfaces
2. **Authentication Context**: React Context for managing auth state
3. **Protected Routes**: Route guards based on authentication status
4. **Custom Hooks**: useAuth, useApi for reusable logic
5. **API Service Layer**: Centralized Axios configuration and error handling
6. **Loading States**: Consistent loading indicators across components

## Entity Relationships
```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│    User     │     │   Category   │     │    Post     │
│             │     │              │     │             │
│ - id        │     │ - id         │     │ - id        │
│ - username  │     │ - name       │     │ - title     │
│ - email     │     │ - slug       │     │ - content   │
│ - role      │     │ - isActive   │     │ - status    │
│ - isActive  │     │              │     │             │
└─────────────┘     └──────────────┘     └─────────────┘
       │                    │                    │
       │                    │                    │
       └────────────────────┼────────────────────┘
                           │
                    ┌──────▼──────┐
                    │ Relationships│
                    │ User 1:N Post│
                    │ Cat 1:N Post │
                    └─────────────┘
```

## API Patterns

### Authentication Flow
```
1. POST /api/auth/register → User registration
2. POST /api/auth/login    → JWT token generation
3. All API requests       → Authorization: Bearer <token>
4. Token verification     → Role-based access control
```

### RESTful Conventions
- **GET** `/api/{resource}` - List all with pagination
- **GET** `/api/{resource}/{id}` - Get specific resource
- **POST** `/api/{resource}` - Create new resource
- **PUT** `/api/{resource}/{id}` - Update existing resource
- **DELETE** `/api/{resource}/{id}` - Delete resource
- **PATCH** `/api/{resource}/{id}/{action}` - Specific actions

### Error Handling Pattern
```json
{
  "statusCode": "400",
  "message": "Validation failed",
  "data": null,
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## Security Patterns

### JWT Implementation
- **Generation**: Username + Role claims with HMAC-SHA256 signing
- **Validation**: Custom authentication filter verifies tokens
- **Storage**: Frontend stores in localStorage (to be implemented)
- **Expiration**: 1-hour token lifetime with refresh capability

### Role-Based Access
- **ADMIN**: Full CRUD access to all resources
- **USER**: Limited access - can create content, manage own posts
- **Endpoint Security**: Method-level authorization with Spring Security

## Development Patterns

### Backend Hot Reloading
- Spring Boot DevTools for automatic restart
- JPA DDL auto-update for schema changes
- Debug logging for development

### Frontend Development (To Be Implemented)
- Vite HMR for instant updates
- TypeScript strict mode for type safety
- Tailwind CSS with JIT compilation
- ESLint for code quality

## Component Integration Patterns
- **CORS Configuration**: Explicit CORS setup for development
- **Environment Variables**: Separate dev/prod configurations
- **Database Strategy**: MySQL for persistence with connection pooling
- **Build Strategy**: Separate build processes, containerization ready 