-- Sample Users
INSERT INTO users (username, email, first_name, last_name, role, is_active, created_at, updated_at) VALUES
('admin', 'admin@cms.com', 'Admin', 'User', 'ADMIN', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('editor', 'editor@cms.com', 'Editor', 'User', 'EDITOR', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('author1', 'author1@cms.com', 'John', 'Author', 'AUTHOR', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('author2', 'author2@cms.com', 'Jane', 'Writer', 'AUTHOR', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('viewer', 'viewer@cms.com', 'Viewer', 'User', 'VIEWER', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Sample Categories
INSERT INTO categories (name, slug, description, is_active, created_at, updated_at) VALUES
('Technology', 'technology', 'Technology related articles', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Business', 'business', 'Business and entrepreneurship', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Lifestyle', 'lifestyle', 'Lifestyle and personal development', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('News', 'news', 'Current events and news', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Tutorials', 'tutorials', 'How-to guides and tutorials', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Sample Posts
INSERT INTO posts (title, slug, content, excerpt, featured_image, status, author_id, category_id, published_at, created_at, updated_at) VALUES
('Getting Started with Spring Boot', 'getting-started-spring-boot', 'Spring Boot is a powerful framework for building Java applications...', 'Learn how to create your first Spring Boot application', 'spring-boot.jpg', 'PUBLISHED', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Modern Web Development with React', 'modern-web-development-react', 'React has revolutionized the way we build user interfaces...', 'Explore modern web development techniques with React', 'react.jpg', 'PUBLISHED', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Business Strategy for Startups', 'business-strategy-startups', 'Starting a business requires careful planning and strategy...', 'Essential business strategies for startup success', 'startup.jpg', 'PUBLISHED', 4, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Healthy Living Tips', 'healthy-living-tips', 'Maintaining a healthy lifestyle is crucial for long-term wellbeing...', 'Simple tips for a healthier lifestyle', 'health.jpg', 'DRAFT', 3, 3, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Latest Tech Trends 2024', 'latest-tech-trends-2024', 'The technology landscape is constantly evolving...', 'Discover the latest technology trends for 2024', 'tech-trends.jpg', 'PUBLISHED', 1, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Sample Post Tags
INSERT INTO post_tags (post_id, tag) VALUES
(1, 'spring-boot'),
(1, 'java'),
(1, 'tutorial'),
(2, 'react'),
(2, 'javascript'),
(2, 'web-development'),
(3, 'business'),
(3, 'startup'),
(3, 'strategy'),
(4, 'health'),
(4, 'lifestyle'),
(4, 'wellness'),
(5, 'technology'),
(5, 'trends'),
(5, '2024'); 