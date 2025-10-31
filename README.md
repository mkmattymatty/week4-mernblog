Content:
# 📰 MERN Blog Application

A full-stack blog app built using the MERN stack — MongoDB, Express.js, React.js, and Node.js — with authentication, image uploads, category filters, and comments.

---

## 🚀 Features
- User authentication (register/login)
- Create, read, update, delete posts
- Categories and filtering
- Image upload for posts
- Comment system
- Responsive UI with Tailwind CSS
- Dark/Light mode toggle

---

## 🏗️ Project Setup

### 🖥️ Server Setup
```bash
cd server
npm install
npm run dev

Client Setup
cd client
npm install
npm run dev

⚙️ Environment Variables
Create .env files in both server and client
MONGO_URI=mongodb://localhost:27017/mernmatty
JWT_SECRET=secret byaok
PORT=5000

📡 API Endpoints
| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/posts`     | Get all posts   |
| GET    | `/api/posts/:id` | Get single post |
| POST   | `/api/posts`     | Create post     |
| PUT    | `/api/posts/:id` | Update post     |
| DELETE | `/api/posts/:id` | Delete post     |

Categories


| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/categories` | Get all categories |
| POST   | `/api/categories` | Create category    |


Tech Stack

Frontend: React, Tailwind CSS, Axios, React Router
Backend: Node.js, Express.js, Mongoose
Database: MongoDB
Authentication: JWT

Author
Mathias Mwaro
Full Stack Web Developer (PLP Cohort VIII - 2025)
