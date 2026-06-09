import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Rate Limiter
app.use(rateLimiter);

// Custom Logger Middleware
/*
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next();
});
*/

// Routes
app.use("/api/notes", notesRoutes);

// Root Route
app.get("/", (req, res) => {
    res.send("API is running...");
});

connectDb().then(() =>{
    // Start Server
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
})