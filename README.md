# ThinkBoard

ThinkBoard is a MERN-style notes application with an Express/MongoDB backend and a React/Vite frontend. The backend exposes REST APIs for notes, connects to MongoDB with Mongoose, and uses Upstash Redis for rate limiting. The frontend is set up with React Router, Tailwind CSS, DaisyUI, Axios, toast notifications, and Lucide icons.

## What We Have Done So Far

- Built the backend server with Express and environment-based configuration.
- Connected MongoDB using Mongoose.
- Added a Note model and REST API routes for creating, reading, updating, and deleting notes.
- Added Upstash Redis rate limiting middleware.
- Enabled CORS for the Vite frontend at `http://localhost:5173`.
- Created the React frontend with Vite.
- Fixed React Router setup so the app renders correctly.
- Added routes for home, create note, and note detail pages.
- Added Tailwind CSS and DaisyUI configuration.
- Added toast support with `react-hot-toast`.
- Added Axios for calling the backend API.
- Added Lucide icons for UI actions.
- Built the home page to fetch notes from the backend and render note cards.
- Added a navbar with a new note button.
- Added a rate-limit UI message for `429` API responses.
- Updated `.gitignore` for dependencies, env files, build output, logs, coverage, and cache folders.

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
thinkboard/
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
        RateLimitedUI.jsx
      lib/
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
