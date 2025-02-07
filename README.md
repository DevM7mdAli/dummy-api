# DummyAPI

DummyAPI is a simple Node.js API that allows you to perform CRUD operations on posts. It uses MongoDB as the database and Mongoose for object data modeling.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/DevM7mdAli/dummy-api.git
   cd dummy-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_uri
   PORT=3000
   ```

## Running the API

To start the server, run:
```sh
npm start
```

For development mode with automatic restarts, run:
```sh
npm run dev
```

The server will be running at `http://127.0.0.1:3000/`.

## API Endpoints

### Get All Posts
- **URL:** `/api/post`
- **Method:** `GET`
- **Description:** Retrieves all posts.

### Get Single Post
- **URL:** `/api/post/{id}`
- **Method:** `GET`
- **Description:** Retrieves a single post by ID.

### Insert Post
- **URL:** `/api/post`
- **Method:** `POST`
- **Description:** Inserts a new post.

### Update Post
- **URL:** `/api/post/{id}`
- **Method:** `PATCH`
- **Description:** Updates an existing post by ID.

### Delete Post
- **URL:** `/api/post/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a post by ID.