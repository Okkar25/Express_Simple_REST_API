const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");

// GET and Show Posts

const showPosts = async () => {
  try {
    output.innerHTML = "";
    const res = await fetch("http://localhost:8000/api/posts");

    if (!res.ok) {
      throw new Error(`Failed to fetch posts`);
    }

    const posts = await res.json();

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = `{ ${post.title} : published in ${post.year} }`;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log(`Error fetching posts: ${error}`);
  }
};

const addPost = async (e) => {
  e.preventDefault();

  const formData = new FormData(this);
  const title = formData.get("title");
  const year = formData.get("year");

  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, year }),
    });

    if (!res.ok) {
      throw new Error(`Failed to add post`);
    }

    const newPost = await res.json();

    const postEl = document.createElement("div");
    postEl.textContent = `{ ${newPost.title} : published in ${newPost.year} }`;
    output.appendChild(postEl);

    showPosts();
  } catch (error) {
    console.log(`Error creating posts: ${error}`);
  }
};

// Event Listeners
button.addEventListener("click", showPosts);
