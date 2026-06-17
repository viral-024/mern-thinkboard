# ThinkBoard

ThinkBoard is a MERN-style notes application with an Express/MongoDB backend and a React/Vite frontend. The backend exposes REST APIs for notes, connects to MongoDB with Mongoose, and uses Upstash Redis for rate limiting. The frontend uses React Router, Tailwind CSS, DaisyUI, Axios, toast notifications, and Lucide icons.

## What We Have Done So Far

- Built the backend server with Express and environment-based configuration.
- Connected MongoDB using Mongoose.
- Added a Note model and REST API routes for creating, reading, updating, and deleting notes.
- Added Upstash Redis rate limiting middleware.
- Updated rate limiting to use the request IP address as the Upstash rate-limit key.
- Enabled CORS for the Vite frontend at `http://localhost:5173`.
- Created the React frontend with Vite.
- Fixed React Router setup so the app renders correctly.
- Added routes for home, create note, and note detail pages.
- Added Tailwind CSS and DaisyUI configuration.
- Added toast support with `react-hot-toast`.
- Added a shared Axios client for calling the backend API from the frontend.
- Added Lucide icons for UI actions.
- Built the home page to fetch notes from the backend and render note cards.
- Added a navbar with a new note button.
- Built the create-note page with title/content validation, loading state, API submit, success toast, and redirect back to the notes list.
- Added delete-note behavior from note cards with confirmation, API delete request, local UI update, and toast feedback.
- Added an empty notes screen with a call-to-action for creating the first note.
- Built the note detail page to fetch one note, edit title/content, save updates, delete the note, and navigate back to the notes list.
- Added loading and toast feedback for note detail actions.
- Consolidated ignore rules into the root `.gitignore` after removing the frontend-level `.gitignore`.

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis
- Upstash Ratelimit
- CORS
- Dotenv
- Nodemon

### Frontend

- React
- Vite
- React Router
- Axios
- React Hot Toast
- Lucide React
- Tailwind CSS
- DaisyUI
- PostCSS
- Autoprefixer
- ESLint

## Project Structure

```text
mern-thinkboard/
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
  frontend/
    src/
      components/
        Navbar.jsx
        NoteCard.jsx
        NotesNotFound.jsx
        RateLimitedUI.jsx
      lib/
        axios.js
        utils.js
      pages/
        CreatePage.jsx
        HomePage.jsx
        NoteDetailPage.jsx
      App.jsx
      main.jsx
      index.css
```

## Install Required Packages

Install backend packages:

```bash
cd backend
npm install
```

Backend packages currently used:

```bash
npm install express mongoose dotenv cors @upstash/redis @upstash/ratelimit
npm install -D nodemon
```

Install frontend packages:

```bash
cd frontend
npm install
```

Frontend packages currently used:

```bash
npm install react react-dom react-router axios react-hot-toast lucide-react
npm install -D vite @vitejs/plugin-react eslint @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh tailwindcss postcss autoprefixer daisyui @types/react @types/react-dom
```

The frontend uses `frontend/src/lib/axios.js` as the shared API client:

```text
http://localhost:5001/api
```

## Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

Do not commit `.env` files to GitHub.

## Run The App

Start the backend:

```bash
cd backend
npm run dev
```

The backend runs at:

```text
http://localhost:5001
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
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

## Current Frontend Pages

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Fetches notes, shows loading and empty states, handles rate-limit responses, renders note cards, and supports deleting notes |
| `/create` | Create Note | Creates a new note with validation, toast feedback, and redirect after success |
| `/note/:id` | Note Detail | Fetches one note, supports editing, saving, deleting, loading state, and toast feedback |

## Note Data Format

```json
{
  "title": "My Note",
  "content": "This is the note content."
}
```

## Useful Commands

Backend:

```bash
npm run dev
npm start
```

Frontend:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```
