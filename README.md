# Full-Stack Application

A modern full-stack web application with Spring Boot 3.4.7 backend and React.js frontend using axios for HTTP communication.

## Project Structure

```
├── backend/                 # Spring Boot 3.4.7 application
│   ├── src/
│   ├── pom.xml
│   └── README.md
├── frontend/                # React.js application
│   ├── src/
│   ├── package.json
│   └── README.md
├── docs/                    # Documentation
└── README.md               # This file
```

## Quick Start

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- Maven
- Git

### Backend Setup
```bash
cd backend
mvn spring-boot:run
```
Backend will be available at: http://localhost:8080

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend will be available at: http://localhost:3000

## Development

### Backend Development
- Spring Boot 3.4.7 with Spring Web
- RESTful API endpoints
- CORS configured for development
- Hot reloading with Maven

### Frontend Development
- React.js with functional components
- Axios for API communication
- Modern JavaScript (ES6+)
- Hot reloading with development server

## API Documentation
- Base URL: http://localhost:8080/api
- All endpoints return JSON responses
- CORS enabled for development

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both backend and frontend
5. Submit a pull request

## License
MIT License 