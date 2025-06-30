import express from "express";
import path from "path";
import url from "url";
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

let posts = [
  { id: 1, title: "Post One", year: 1999 },
  { id: 2, title: "Post Two", year: 2000 },
  { id: 3, title: "Post Three", year: 2001 },
  { id: 4, title: "Post Four", year: 2005 },
  { id: 5, title: "Post Five", year: 2010 },
];

// GET All Posts
// http://localhost:8000/api/posts?limit=2&page=2&sort=desc

app.get("/api/posts", (req, res) => {
  // console.log(req.query);
  // res.send(posts)
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// GET Single Post
app.get("/api/posts/:id", (req, res) => {
  const id = parseFloat(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({ message: `No such post with the ID: ${id}` });
  }

  res.status(200).send(post);
});

app.listen(port, () => console.log(`Server running on ${port}`));
