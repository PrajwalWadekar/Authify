# Authify – MERN Authentication System

**Authify** is a secure and modern authentication system built with the MERN stack (MongoDB, Express, React, Node.js). This demo project showcases a complete user authentication flow including signup, login, email verification, password reset, and protected routes.

🌐 **Live Demo**: [https://mern-authentication-system-lkmn.onrender.com](https://mern-authentication-system-lkmn.onrender.com)

---

## Features

- User signup with email verification  
- Secure login and logout  
- Forgot password and reset password functionality  
- Email notifications for verification and password reset  
- Protected routes using JWT  
- Authentication status check  
- Responsive frontend UI built with React and Tailwind CSS

---

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  
- **Email Service**: Resend API

---

## Implemented Topics

- Database setup and configuration  
- Signup and login endpoints  
- Email verification flow  
- Welcome email template  
- Logout functionality  
- Forgot and reset password endpoints  
- Auth status check  
- Frontend pages for signup, login, email verification, dashboard, and password recovery  
- Route protection using JWT

---

### 🔁 Authentication Flow

1. **Signup** – User registers with name, email, and password  
2. **Email Verification** – A verification link is sent via email  
3. **Login** – After verification, user logs in securely  
4. **Dashboard** – Authenticated users access protected content  
5. **Forgot Password** – If needed, user requests a reset link  
6. **Reset Password** – User sets a new password via email link  
7. **Logout** – Ends the session and clears tokens


## Environment Variables

Create a `.env` file in the **root** directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=development
RESEND_API=your_resend_api_key
CLIENT_URL=http://localhost:5173
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/PrajwalWadekar/MERN-Authentication-System
cd MERN-Authentication-System
```

### 2. Setup Backend

```bash

npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---


## Demo Credentials

You can register a new account using any valid email address. A verification link will be sent to your inbox.

---

## 📸 Screenshots

#### Signup Page  
![Signup](https://your-image-host.com/signup.png)

#### Email Verification  
![Email Verification](https://your-image-host.com/verify.png)

#### Login Page  
![Login](https://your-image-host.com/login.png)

#### Dashboard  
![Dashboard](https://your-image-host.com/dashboard.png)

#### Forgot Password  
![Forgot Password](https://your-image-host.com/forgot-password.png)

#### Reset Password  
![Reset Password](https://your-image-host.com/reset-password.png)


---
