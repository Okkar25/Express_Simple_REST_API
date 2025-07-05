import express from "express";

const PORT = 3000;
const app = express();

// templates
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Learning Ejs Express",
    message: "Welcome to Ejs Course",
    people: [
      { id: 1, name: "Gary", age: 24, major: "Computer Science" },
      { id: 2, name: "John", age: 18, major: "Fashion" },
      { id: 3, name: "Claire", age: 60, major: "Business" },
      { id: 4, name: "Bobby", age: 34, major: "Law" },
      { id: 5, name: "Rachel", age: 45, major: "Architecture" },
    ],
  });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
