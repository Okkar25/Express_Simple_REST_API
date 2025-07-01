import express from "express";
import path from "path";
import url from "url";
import handlePosts from "./routes/posts.js";
import logger from "./middlewares/logger.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/error.js";
const port = process.env.PORT || 3000;
// import dotenv from "dotenv";
// dotenv.config();

const app = express();

// Get the directory name
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename, __dirname);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(logger);

// set up static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// Routes
app.use("/api/posts", handlePosts);

// error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`));
