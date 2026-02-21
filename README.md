# 📝 NoteStream — Blog Web Application

NoteStream is a full-stack blog web application built using **Node.js, Express, and EJS**.  
It allows users to create, edit, delete, and view blog posts with a clean, minimal, and responsive user interface.

---

## 🚀 Features

- ✍️ Create new blog posts
- 📝 Edit existing posts
- 🗑 Delete posts
- 📖 View full articles
- 📱 Fully responsive design
- 🎨 Minimal card-based layout
- 📩 Contact form with server-side validation
- ⚡ Smooth UI interactions with Bootstrap & custom CSS

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **Frontend:** HTML5, CSS3, Bootstrap 5
- **Architecture:** MVC-style structure (routes + views + static files)

---

## 📂 Project Structure

```bash
notestream-blog/
│
├── public/
│   ├── styles/
│   │   └── main.css
│   └── images/
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   ├── post.ejs
│   ├── about.ejs
│   └── contact.ejs
│
├── index.js
├── package.json
└── README.md
```


---

## 📸 Screenshots

### 🏠 Home Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/66d9c735-ffb6-4119-9949-c2352e4dd485" />


---

### ✍️ Create New Post
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d52300ec-aafa-484e-90b0-4baeee4ca8f0" />


---

### 📖 Single Post View
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a1db29bb-77fe-4f68-9a64-cd4b73ce5204" />


---

### 🧑 About Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/07492930-6e9d-45ca-a60b-da54a0d74459" />


---

### 📩 Contact Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/30e96007-a7f5-4187-9701-f574deab3d57" />

## ⚙️ Installation & Setup

# Clone the repository
git clone [https://github.com/YOUR_USERNAME/notestream-blog.](https://github.com/Siddharth-Singh-28/NoteStream-BlogWebApplication)git

### Navigate into the project folder
cd notestream-blog

### Install dependencies
npm install

### Start the server
node index.js
### or (if using nodemon)
### nodemon index.js

### Open in browser
### http://localhost:3000


---

## 🧠 How It Works

- Posts are stored in-memory using a JavaScript array.
- Each post is assigned a unique ID using `Date.now()`.
- Express routes handle CRUD operations:
  - `GET /` → Show all posts
  - `GET /new` → Create form
  - `POST /new` → Save new post
  - `GET /post/:id` → View single post
  - `GET /edit/:id` → Edit form
  - `POST /edit/:id` → Update post
  - `POST /delete/:id` → Delete post

⚠️ Note: Posts do not persist after server restart (no database yet).

---

## 🌟 Future Improvements

- 🔐 User authentication
- 💾 Database integration (MongoDB / PostgreSQL)
- 🌙 Dark mode
- 🏷 Categories & tags
- 📦 Markdown support
- 🚀 Deployment to cloud

---

## 👤 Author

**Siddharth Singh**

- GitHub: [Github](https://github.com/Siddharth-Singh-28)
- LinkedIn: [Linkedin](https://www.linkedin.com/in/siddharth-singh-1327b8243)

---

## 📄 License

This project is open-source and available under the MIT License.




