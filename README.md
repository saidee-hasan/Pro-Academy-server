# Pro-Academy Server

## Project Overview
Pro-Academy Server is the backend for an online academy platform that handles user authentication, course management, student enrollment, and more. Built with **Node.js**, **Express.js**, **JWT**, and **MongoDB**, this server supports a variety of features for managing academy operations.

## Features
- **User Authentication**: Secure login and registration using JWT for admin, teachers, and students.
- **Course Management**: Admins and teachers can create, update, and delete courses.
- **Student Enrollment**: Students can enroll in courses, track their progress, and access content.
- **Content Delivery**: Courses can have videos, quizzes, and assignments.
- **API Security**: Endpoints are secured using JWT tokens to ensure data privacy and security.
- **MongoDB Database**: Data storage for users, courses, and enrollments.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing user data, course content, and student progress.
- **JWT**: JSON Web Tokens for secure user authentication and authorization.
- **Multer**: Middleware for handling file uploads, including course content (e.g., videos).
- **Cloudinary**: Optional service for hosting course images and videos (if needed).
- **Nodemailer**: For sending notifications to users (e.g., course updates).

## Installation

### Prerequisites
- **Node.js** installed on your machine.
- **MongoDB** running locally or remotely (e.g., MongoDB Atlas).
- **Cloudinary account** (optional for media storage).

### Steps to Set Up

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pro-academy-server.git
