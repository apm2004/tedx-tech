
# 🔐 Basic Authentication API

A secure backend API built using **Node.js** and **Express** that supports:

- Email/password signup & login  
- Secure password hashing using bcrypt  
- JWT-based session authentication  
- Google OAuth Sign-In  
- Role-based access control (admin/user)  
- Access token refresh logic  
- Logout support  

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT, Passport.js (Google OAuth)  
- **Deployment-ready**: Works on platforms like Render, Railway, etc.

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/basic-authentication.git
cd basic-authentication
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
```

> ⚠️ Ensure that `.env` is listed in `.gitignore`.

### 4. Run the server

```bash
npm start
```

Your API will be live at:  
`http://localhost:5000`

---

## 🔄 API Endpoints

### 🔐 Authentication

- `POST /api/signup` – Register a new user  
- `POST /api/login` – Authenticate user and return access & refresh tokens  
- `POST /api/auth/refresh-token` – Get new access token using a valid refresh token  
- `POST /api/logout` – Log out by invalidating the refresh token  

### 🔗 Google OAuth

- `GET /api/auth/google` – Start Google login  
- `GET /api/auth/google/callback` – Google login callback  
- `GET /api/auth/google/success?token=...` – Redirect view of token  

### 🔏 Protected Routes

- `GET /api/dashboard` – Requires valid access token  

### 🛡️ Admin Routes

- `GET /api/admin/dashboard` – Admin-only route  
- `GET /api/admin/users/:role` – Get users with a specific role (admin-only)  

---

## 🔐 Token Logic

- **Access Token**: Valid for 15 minutes  
- **Refresh Token**: Valid for 7 days  
- Include access token in headers as:  
  ```http
  Authorization: Bearer <access_token>
  ```

### 🔄 Refreshing Token

Send a POST request to refresh the access token:

```http
POST /api/auth/refresh-token
Content-Type: application/json

{
  "token": "<your_refresh_token>"
}
```

Response will include a new access token.

---

## 🚀 Deployment (Render/Railway)

1. Push your code to GitHub  
2. Create a new Web Service on Render or Railway  
3. Set all the environment variables from your `.env` file  
4. Use the following build and start commands:

```bash
npm install
npm start
```

---

## 🚀 Deployed URL

The live backend API is deployed on **Railway** and can be accessed here:

🔗 **[https://tedx-tech-production.up.railway.app/](https://tedx-tech-production.up.railway.app/)**

### ✅ Available API Endpoints

| Endpoint                         | Method | Description                          |
|----------------------------------|--------|--------------------------------------|
| `/`                              | GET    | Health check                         |
| `/api/signup`                    | POST   | Register a new user                  |
| `/api/login`                     | POST   | Login with email and password        |
| `/api/dashboard`                 | GET    | Protected route (JWT required)       |
| `/api/admin/dashboard`           | GET    | Admin-only protected route           |
| `/api/refresh-token`             | POST   | Refresh JWT using refresh token      |
| `/api/logout`                    | POST   | Logout and invalidate refresh token  |


## 👨‍💻 Author

**Adithya Pramod Menon**  
Built as part of a backend developer task to demonstrate:

- Secure authentication using JWT & OAuth  
- Role-based access control  
- Token refresh logic  
- Deployment-ready API

---