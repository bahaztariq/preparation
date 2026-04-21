-- Database Schema: Blog Management System

-- Create Tables
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT,
    category_id INT,
    status ENUM('draft', 'published') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE SET NULL
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- Indexes for performance
CREATE INDEX idx_post_status ON posts (status);

CREATE INDEX idx_comment_post ON comments (post_id);

-- Sample Data
INSERT INTO categories (name) VALUES ('Tech'), ('Life'), ('Travel');

INSERT INTO
    users (
        username,
        email,
        password,
        role
    )
VALUES (
        'tariq',
        'tariq@example.com',
        '$2y$10$xyz...',
        'admin'
    ),
    (
        'john_doe',
        'john@example.com',
        '$2y$10$abc...',
        'user'
    );

INSERT INTO
    posts (
        title,
        content,
        user_id,
        category_id,
        status
    )
VALUES (
        'Getting Started with PHP OOP',
        'OOP is powerful...',
        1,
        1,
        'published'
    ),
    (
        'Travel Tips for 2026',
        'Be prepared...',
        2,
        3,
        'published'
    );

-- Complex Queries Examples

-- 1. Get all published posts with category names and author usernames (JOIN)
SELECT p.title, c.name AS category, u.username AS author
FROM
    posts p
    JOIN categories c ON p.category_id = c.id
    JOIN users u ON p.user_id = u.id
WHERE
    p.status = 'published'
ORDER BY p.created_at DESC;

-- 2. Count comments per post (GROUP BY)
SELECT p.title, COUNT(cm.id) AS comment_count
FROM posts p
    LEFT JOIN comments cm ON p.id = cm.post_id
GROUP BY
    p.id;

-- 3. Find authors who have more than 5 posts (HAVING)
SELECT u.username, COUNT(p.id) AS post_count
FROM users u
    JOIN posts p ON u.id = p.user_id
GROUP BY
    u.id
HAVING
    post_count > 5;

-- 4. Subquery: Get users who haven't written any posts
SELECT username
FROM users
WHERE
    id NOT IN (
        SELECT DISTINCT
            user_id
        FROM posts
    );