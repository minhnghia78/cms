# Technical Context

## Technology Stack

### Backend Technologies
- **Java**: 21 (LTS)
- **Spring Boot**: 3.4.7
- **Spring Security**: JWT-based authentication and authorization
- **Spring Data JPA**: ORM and database operations
- **MyBatis**: Additional SQL mapping support
- **MySQL**: Production database with connection pooling
- **Maven**: Build tool and dependency management
- **Lombok**: Boilerplate code reduction
- **MapStruct**: Object mapping between DTOs and entities
- **JWT (jsonwebtoken)**: Token-based authentication
- **BCrypt**: Password hashing

### Frontend Technologies
- **Node.js**: 18+ for development environment
- **React**: 19.1.0 with functional components and hooks
- **TypeScript**: 5.8.3 with strict type checking
- **Vite**: 7.0.4 for fast build tooling and HMR
- **Tailwind CSS**: 4.1.11 for utility-first styling
- **ESLint**: Code quality and consistency
- **Axios**: HTTP client (to be added for API communication)

## Development Setup

### Prerequisites
- **Java**: 21+ (Oracle JDK or OpenJDK)
- **Node.js**: 18+ with npm
- **MySQL**: 8.0+ database server
- **Maven**: 3.8+ for backend builds
- **Git**: Version control
- **IDE**: IntelliJ IDEA or VS Code with Java/TypeScript support

### Environment Variables

#### Backend Configuration
```yaml
# Database Connection
MYSQL_URL: jdbc:mysql://localhost:3306/cms
MYSQL_USERNAME: root
MYSQL_PASSWORD: 12345

# JWT Configuration
JWT_SECRET: super_private_secret_key_string_of_minh_nghia_can_not_by_pass
JWT_EXPIRATION: 3600000 # 1 hour

# Server Configuration
SERVER_PORT: 8080
SPRING_PROFILES_ACTIVE: dev
```

#### Frontend Configuration (To Be Added)
```bash
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_NAME=CMS Application
VITE_JWT_STORAGE_KEY=cms_auth_token
```

## Dependencies

### Backend Dependencies (Maven)
```xml
<dependencies>
    <!-- Core Spring Boot -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>

    <!-- Database -->
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
    </dependency>
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>3.0.4</version>
    </dependency>

    <!-- Utilities -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
    </dependency>
    <dependency>
        <groupId>org.mapstruct</groupId>
        <artifactId>mapstruct</artifactId>
        <version>1.6.3</version>
    </dependency>

    <!-- JWT -->
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-api</artifactId>
        <version>0.11.5</version>
    </dependency>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-impl</artifactId>
        <version>0.11.5</version>
    </dependency>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-jackson</artifactId>
        <version>0.11.5</version>
    </dependency>
</dependencies>
```

### Frontend Dependencies (package.json)
```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwindcss": "^4.1.11",
    "axios": "^1.6.0" // To be added
  },
  "devDependencies": {
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "eslint": "^9.30.1",
    "typescript": "~5.8.3",
    "vite": "^7.0.4"
  }
}
```

## Database Configuration

### MySQL Setup
```sql
-- Database Creation
CREATE DATABASE cms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- User Setup (if needed)
CREATE USER 'cms_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON cms.* TO 'cms_user'@'localhost';
FLUSH PRIVILEGES;
```

### JPA Configuration
```yaml
spring:
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        dialect: org.hibernate.dialect.MySQL8Dialect
```

## Security Configuration

### JWT Implementation
- **Algorithm**: HMAC-SHA256
- **Token Lifetime**: 1 hour (3600000ms)
- **Claims**: Subject (username), Role, Issued At, Expiration
- **Storage**: Frontend localStorage (to be implemented)

### Password Security
- **Hashing**: BCrypt with default strength (10 rounds)
- **Validation**: Bean Validation annotations
- **Policy**: Minimum requirements enforced at service layer

## Development Workflow

### Backend Development
```bash
# Navigate to backend
cd backend

# Run with Maven
mvn spring-boot:run

# Or run with hot reload
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Dspring.profiles.active=dev"

# Access endpoints
curl http://localhost:8080/api/auth/login
```

### Frontend Development
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Add axios (when ready)
npm install axios @types/axios

# Run development server
npm run dev

# Access application
open http://localhost:3000
```

## Performance Considerations

### Backend Optimizations
- **Connection Pooling**: HikariCP for database connections
- **JPA Optimization**: Lazy loading, proper fetch strategies
- **Caching**: Spring Cache abstraction (to be implemented)
- **Pagination**: Built-in pagination for large datasets

### Frontend Optimizations (To Be Implemented)
- **Code Splitting**: Vite's automatic chunking
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image optimization and compression
- **Lazy Loading**: Route-based and component-based lazy loading

## Testing Strategy

### Backend Testing
- **Unit Tests**: Service layer with mocked dependencies
- **Integration Tests**: Repository layer with test database
- **Security Tests**: Authentication and authorization
- **API Tests**: Controller layer with MockMvc

### Frontend Testing (To Be Implemented)
- **Component Tests**: React Testing Library
- **Unit Tests**: Custom hooks and utilities
- **E2E Tests**: Cypress or Playwright
- **API Integration**: Mock Service Worker (MSW)

## Deployment Considerations

### Environment Configuration
- **Development**: H2/MySQL local, debug logging
- **Production**: MySQL cluster, optimized logging
- **Containerization**: Docker support for both services
- **CI/CD**: GitHub Actions or Jenkins pipeline

### Monitoring & Logging
- **Backend**: Spring Boot Actuator, structured logging
- **Frontend**: Error boundaries, analytics integration
- **Database**: Query performance monitoring
- **Security**: Authentication failure tracking 