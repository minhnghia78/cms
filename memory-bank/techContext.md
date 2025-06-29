# Technical Context

## Technology Stack

### Backend Technologies
- **Java**: 17 or higher
- **Spring Boot**: 3.4.7
- **Spring Web**: For RESTful API development
- **Spring Data JPA**: For data persistence (optional)
- **Maven**: Build tool and dependency management
- **H2 Database**: In-memory database for development (optional)

### Frontend Technologies
- **Node.js**: 18 or higher
- **React.js**: Latest stable version
- **Axios**: HTTP client for API communication
- **npm/yarn**: Package management
- **Create React App or Vite**: Development environment

## Development Setup

### Prerequisites
- Java 17+ installed and configured
- Node.js 18+ installed
- Maven installed
- Git for version control

### Environment Variables
- **Backend**: 
  - `SERVER_PORT=8080` (default)
  - `SPRING_PROFILES_ACTIVE=dev`
- **Frontend**:
  - `REACT_APP_API_BASE_URL=http://localhost:8080/api`
  - `PORT=3000` (default)

## Dependencies

### Backend Dependencies (Maven)
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### Frontend Dependencies (package.json)
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.0",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0"
  }
}
```

## Technical Constraints
- **CORS**: Must be configured for cross-origin requests
- **API Versioning**: RESTful API versioning strategy
- **Error Handling**: Consistent error response format
- **Security**: Basic security considerations for development
- **Performance**: Optimized for development workflow

## Development Workflow
1. **Backend**: Maven-based build with hot reloading
2. **Frontend**: npm/yarn scripts with development server
3. **Integration**: Manual testing of API endpoints
4. **Deployment**: Separate deployment strategies for each component 