# UBER-CLONE Backend API

This is the backend API for the UBER-CLONE application. Below is the documentation for the available endpoints, their purpose, and example responses.

---

## Base URL

```
http://localhost:<PORT>/api/v1/users
```

Replace `<PORT>` with the value specified in the `.env` file.

---

## Endpoints

### 1. **Register User**

**URL:** `/register`  
**Method:** `POST`  
**Description:** Registers a new user in the system.  

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `fullname.firstname`: Must be at least 3 characters long.
- `fullname.lastname`: Must be at least 3 characters long.
- `email`: Must be a valid email address.
- `password`: Must be at least 3 characters long.

**Response:**
- **Success (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f9c0e5e4b0f5a1b2c3d4e5",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "soketId": null
  },
  "message": "User registered successfully"
}
```

- **Error (400):**
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

- **Error (500):**
```json
{
  "message": "Internal server error",
  "error": "User already exists"
}
```

---

### 2. **Login User**

**URL:** `/login`  
**Method:** `POST`  
**Description:** Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `email`: Must be a valid email address.
- `password`: Must be at least 4 characters long.

**Response:**
- **Success (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f9c0e5e4b0f5a1b2c3d4e5",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "soketId": null
  }
}
```

- **Error (400):**
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

- **Error (401):**
```json
{
  "msg": "Invalid email or password"
}
```

- **Error (404):**
```json
{
  "msg": "You are not logged in; there is an error outside"
}
```

---

### 3. **Get User Profile**

**URL:** `/profile`  
**Method:** `GET`  
**Description:** Retrieves the authenticated user's profile information.

**Headers Required:**
```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

**Response:**
- **Success (200):**
```json
{
  "user": {
    "_id": "64f9c0e5e4b0f5a1b2c3d4e5",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "soketId": null
  }
}
```

- **Error (401):**
```json
{
  "msg": "Access denied. No token provided"
}
```

---

### 4. **Logout User**

**URL:** `/logout`  
**Method:** `POST`  
**Description:** Invalidates the user's JWT token and removes it from cookies.

**Headers Required:**
```json
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
```

**Response:**
- **Success (200):**
```json
{
  "msg": "Logged out successfully"
}
```

- **Error (401):**
```json
{
  "msg": "Invalid token"
}
```

- **Error (500):**
```json
{
  "msg": "Error during logout"
}
```

---

## Environment Variables

Ensure the following environment variables are set in the `.env` file:

- `PORT`: The port on which the server runs.
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT token generation.
- `JWT_EXPIRES_IN`: Expiration time for JWT tokens.

---

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm run dev
   ```

3. Access the API at `http://localhost:<PORT>`.

---

## Notes

- Ensure MongoDB is running and accessible via the `MONGO_URI` provided in the `.env` file.
- The `token` in the response can be used for authentication in future requests.
