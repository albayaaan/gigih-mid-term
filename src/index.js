// src/index.js
const express = require("express");
const mongoose = require("mongoose");
// const config = require("./config");
const routes = require("./app/routes/routes");
// const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/tokpedplay", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log(`Server running on port 3000`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
    });

// Middleware
app.use(express.json());

// Routes
app.use(routes);

// 404 Route
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(500).json({ message: "Internal server error" });
});
