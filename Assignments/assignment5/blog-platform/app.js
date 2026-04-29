const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// EJS setup (ONLY ONCE)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

const viewRoutes = require("./routes/viewRoutes");
app.use("/", viewRoutes);

/* ❌ COMMENT ROUTES REMOVED (because file missing) */
// If needed later, create routes/commentRoutes.js and then uncomment

// const commentRoutes = require("./routes/commentRoutes");
// app.use("/api/comments", commentRoutes);

module.exports = app;