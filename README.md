# ThinkBoard

A simple MERN-style notes application backend built with Express, MongoDB, Mongoose, and Upstash rate limiting.

## Features

- Create, read, update, and delete notes
- MongoDB database connection with Mongoose
- Request rate limiting using Upstash Redis
- Environment-based configuration
- REST API structure with routes, controllers, models, and middleware

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis
- Upstash Ratelimit
- Dotenv

## Project Structure

```text
backend/
  src/
    config/
      db.js
      upstash.js
    controller/
      notesController.js
    middleware/
      rateLimiter.js
    models/
      Note.js
    routes/
      notesRoutes.js
    server.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone <https://github.com/viral-024/thinkboard.git>
cd <thinkboard>
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Create environment file

Create a `.env` file inside the `backend` folder:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

### 4. Run the server

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

The API will run at:

```text
http://localhost:5001
```

## API Endpoints

Base URL:

```text
/api/notes
```

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a single note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Note Data Format

```json
{
  "title": "My Note",
  "content": "This is the note content."
}
```

## Important

Do not commit `.env`, `node_modules`, or files containing database credentials to GitHub.

