import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", {posts});
});

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/new", (req, res) => {
  const{title, content} = req.body;

  if(!title || !content || title.length > 60) {
    return res.redirect("/new");
  }

  const newPost = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date()
  };

  posts.push(newPost);

  res.redirect("/");
})

app.get("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);

  const post = posts.find(p => p.id === postId);

  if(!post) {
    return res.redirect("/");
  }

  res.render("post", { post});
})

app.get("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);

  const post = posts.find(p => p.id === postId);

  if(!post) {
    return res.redirect("/");
  }

  res.render("edit", {post});
})

app.post("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;

  const post = posts.find(p => p.id === postId);

  if (!post || !title || !content || title.length > 60) {
    return res.redirect("/");
  }

  post.title = title;
  post.content = content;

  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const postId = parseInt(req.params.id);

  posts = posts.filter(post => post.id != postId);

  res.redirect("/");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact", { error: null, success: null });
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.render("contact", {
      error: "All fields are required.",
      success: null
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.render("contact", {
      error: "Please enter a valid email address.",
      success: null
    });
  }

  console.log("New Contact Submission:");
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Message:", message);

  res.render("contact", {
    success: "Message sent successfully.",
    error: null
  });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})