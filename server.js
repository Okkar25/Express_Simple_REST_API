import express from "express";
import path from "path";
import url from "url";
import handlePosts from "./routes/posts.js";
// import dotenv from "dotenv";
// dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename, __dirname);

// set up static folder
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// Routes
app.use("/api/posts", handlePosts);

app.listen(port, () => console.log(`Server running on ${port}`));
