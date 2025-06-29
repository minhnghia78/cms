# Backend - Spring Boot 3.4.7 CMS

Spring Boot 3.4.7 backend application for a Content Management System (CMS) with RESTful API endpoints.

## Features

- Spring Boot 3.4.7 with Spring Web and Spring Data JPA
- CMS entities: Users, Categories, Posts
- RESTful API endpoints for all CRUD operations
- CORS configuration for frontend integration
- H2 in-memory database for development
- Spring Boot Actuator for monitoring
- Hot reloading with Spring Boot DevTools
- Sample data initialization

## CMS Entities

### User
- **Fields**: id, username, email, firstName, lastName, role, isActive, timestamps
- **Roles**: ADMIN, EDITOR, AUTHOR, VIEWER
- **Endpoints**: `/api/users/*`

### Category
- **Fields**: id, name, slug, description, isActive, timestamps
- **Endpoints**: `/api/categories/*`

### Post
- **Fields**: id, title, slug, content, excerpt, featuredImage, status, author, category, tags, timestamps
- **Status**: DRAFT, PUBLISHED, ARCHIVED
- **Endpoints**: `/api/posts/*`

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

## Quick Start

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Run the application:**
   ```bash
   mvn spring-boot:run
   ```

3. **Access the application:**
   - API Base URL: http://localhost:8080/api
   - Health Check: http://localhost:8080/api/health
   - H2 Console: http://localhost:8080/h2-console
   - Actuator: http://localhost:8080/actuator

## API Endpoints

### Health Check
- `GET /api/health` - Check if backend is running

### Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user
- `GET /api/users/active` - Get active users
- `GET /api/users/role/{role}` - Get users by role

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get category by ID
- `POST /api/categories` - Create new category
- `PUT /api/categories/{id}` - Update category
- `DELETE /api/categories/{id}` - Delete category
- `GET /api/categories/active` - Get active categories
- `GET /api/categories/slug/{slug}` - Get category by slug

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/{id}` - Get post by ID
- `POST /api/posts` - Create new post
- `PUT /api/posts/{id}` - Update post
- `DELETE /api/posts/{id}` - Delete post
- `PATCH /api/posts/{id}/publish` - Publish post
- `PATCH /api/posts/{id}/archive` - Archive post
- `GET /api/posts/author/{authorId}` - Get posts by author
- `GET /api/posts/category/{categoryId}` - Get posts by category
- `GET /api/posts/published` - Get published posts
- `GET /api/posts/status/{status}` - Get posts by status

## Development

### Project Structure
```
src/
├── main/
│   ├── java/
│   │   └── com/example/fullstack/
│   │       ├── FullstackApplication.java
│   │       ├── config/
│   │       │   └── CorsConfig.java
│   │       ├── controller/
│   │       │   ├── HealthController.java
│   │       │   ├── UserController.java
│   │       │   ├── CategoryController.java
│   │       │   └── PostController.java
│   │       ├── service/
│   │       │   ├── UserService.java
│   │       │   ├── CategoryService.java
│   │       │   └── PostService.java
│   │       ├── repository/
│   │       │   ├── UserRepository.java
│   │       │   ├── CategoryRepository.java
│   │       │   └── PostRepository.java
│   │       ├── entity/
│   │       │   ├── User.java
│   │       │   ├── UserRole.java
│   │       │   ├── Category.java
│   │       │   ├── Post.java
│   │       │   └── PostStatus.java
│   │       └── dto/
│   │           ├── ApiResponse.java
│   │           ├── UserDto.java
│   │           ├── CategoryDto.java
│   │           └── PostDto.java
│   └── resources/
│       ├── application.yml
│       └── data.sql
└── test/
    └── java/
        └── com/example/fullstack/
            └── FullstackApplicationTests.java
```

### Building the Application
```bash
mvn clean compile
```

### Running Tests
```bash
mvn test
```

### Package the Application
```bash
mvn clean package
```

## Configuration

The application uses `application.yml` for configuration:

- **Server Port**: 8080
- **Database**: H2 in-memory database
- **CORS**: Configured for http://localhost:3000
- **Logging**: Debug level for development
- **Sample Data**: Automatically loaded from `data.sql`

## Database

- **Type**: H2 in-memory database
- **Console**: Available at http://localhost:8080/h2-console
- **Credentials**: 
  - Username: sa
  - Password: password
  - JDBC URL: jdbc:h2:mem:testdb

## Sample Data

The application includes sample data for testing:

- **5 Users**: admin, editor, author1, author2, viewer
- **5 Categories**: Technology, Business, Lifestyle, News, Tutorials
- **5 Posts**: Various articles with different statuses and tags

## Monitoring

Spring Boot Actuator provides monitoring endpoints:

- `/actuator/health` - Application health
- `/actuator/info` - Application information
- `/actuator/metrics` - Application metrics 