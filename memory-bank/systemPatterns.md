# System Patterns

## Architecture Overview
```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│   React.js FE   │ ◄─────────────► │  Spring Boot BE │
│   (Port 3000)   │                 │   (Port 8080)   │
└─────────────────┘                 └─────────────────┘
         │                                   │
         │                                   │
    ┌────▼────┐                        ┌────▼────┐
    │  Axios  │                        │  Maven  │
    │  HTTP   │                        │  Build  │
    └─────────┘                        └─────────┘
```

## Key Technical Decisions

### Backend (Spring Boot 3.4.7)
- **Framework**: Spring Boot 3.4.7 with Spring Web
- **Build Tool**: Maven
- **Java Version**: 17+
- **Architecture**: RESTful API with controller-service-repository pattern
- **CORS**: Configured for development environment
- **Port**: 8080 (default Spring Boot port)

### Frontend (React.js)
- **Framework**: React.js with functional components and hooks
- **HTTP Client**: Axios for API communication
- **Build Tool**: npm/yarn with Create React App or Vite
- **Port**: 3000 (default React development server)
- **State Management**: React hooks (useState, useEffect, useContext)

### Communication Patterns
- **HTTP Methods**: GET, POST, PUT, DELETE
- **Data Format**: JSON
- **Error Handling**: Consistent error responses
- **CORS**: Configured for cross-origin requests during development

## Design Patterns

### Backend Patterns
1. **Controller Layer**: Handles HTTP requests/responses
2. **Service Layer**: Contains business logic
3. **Repository Layer**: Data access and persistence
4. **DTO Pattern**: Data transfer objects for API responses
5. **Exception Handling**: Global exception handling with consistent error responses

### Frontend Patterns
1. **Component Architecture**: Reusable, composable components
2. **Custom Hooks**: Encapsulate API calls and state logic
3. **Service Layer**: Axios-based API service functions
4. **Error Boundaries**: React error boundary for error handling
5. **Loading States**: Consistent loading indicators

## Component Relationships
- **Backend**: Modular package structure with clear separation of concerns
- **Frontend**: Component-based architecture with props and state management
- **Integration**: RESTful API contracts between frontend and backend 