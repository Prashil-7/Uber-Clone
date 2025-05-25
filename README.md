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

# Captain API Documentation

## Base URL
```
http://localhost:<PORT>/api/v1/captain
```

## Endpoints

### 1. **Register Captain**

**URL:** `/register`  
**Method:** `POST`  
**Description:** Register new captain with vehicle details

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "captain@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "MH12DE3456",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### 2. Login
`POST /login`
```json
{
  "email": "captain@example.com",
  "password": "password123"
}
```

#### 3. Get Profile
`GET /profile`  
Requires Auth Header: `Authorization: Bearer <token>`

#### 4. Logout
`POST /logout`  
Requires Auth Header: `Authorization: Bearer <token>`

### Validation Rules
- Names: Min 3 characters
- Email: Valid format, unique
- Password: Min 3 characters
- Vehicle:
  - Color: Min 3 characters
  - Plate: Min 7 characters
  - Type: "car", "auto", or "motorcycle"
  - Capacity: Min 1

### Success Responses
```json
{
  "token": "eyJhbG...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "black",
      "plate": "MH12DE3456",
      "capacity": 4,
  "vehicleType": "car"
    }
  }
}
```

### Error Responses
```json
{
  "msg": "Error message here",
  "err": [
    {
      "msg": "Validation error message",
      "param": "field_name"
    }
  ]
}
```

### Environment Variables
```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/uber-clone
JWT_CAPTAIN_SECRET=your_secret
JWT_EXPIRES_IN=24h
```
