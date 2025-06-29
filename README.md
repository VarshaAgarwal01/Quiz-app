
# 📚 Quiz App

A full-stack quiz application built with **Node.js**, **Express**, **MongoDB**, and **Vanilla JS**. Users can take quizzes, and scores are tracked with a clean frontend and RESTful backend.

---

## 📁 Project Structure

```
quiz-app-full/
├── backend/
│   ├── index.js              # Main Express server
│   ├── models/               # Mongoose models (User & Question)
│   ├── seed.js               # DB seeding script
│   ├── package.json          # Backend dependencies
├── frontend/
│   ├── index.html            # Quiz UI
│   ├── script.js             # Quiz logic & API communication
│   └── style.css             # Styling
```

---

## ✅ Prerequisites

Make sure the following tools are installed:

| Tool         | Version        | Download                              |
|--------------|----------------|----------------------------------------|
| Node.js      | v14 or higher  | https://nodejs.org/                    |
| MongoDB      | Any version or use MongoDB Atlas | https://www.mongodb.com/try/download/community |
| Git          | (optional)     | https://git-scm.com/downloads          |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```

### 2. Set Up MongoDB

Use either:

#### 🔸 Local MongoDB

Ensure MongoDB is running:

```bash
mongod
```

#### 🔸 MongoDB Atlas (Cloud)

- Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Whitelist your IP
- Create a DB named `quizDB`
- Use the connection URI in the next step

---

### 3. Configure MongoDB URI

Edit `backend/index.js`:

```js
mongoose.connect('mongodb://127.0.0.1:27017/quizDB')
```

or use your Atlas URI:

```js
mongoose.connect('your-mongodb-uri')
```

---

### 4. Install Dependencies

```bash
cd backend
npm install
```

---

### 5. Seed the Database (Optional)

```bash
node seed.js
```

---

### 6. Run the Server

```bash
node index.js
```

---

### 7. Launch the Frontend

```bash
cd ../frontend
```

Then either:

- Open `index.html` directly in a browser  
- OR use **Live Server** in VS Code for better experience

---

## 📬 Scripts Summary

| Command           | Purpose                          |
|-------------------|----------------------------------|
| `npm install`     | Install backend dependencies     |
| `node seed.js`    | Seed the database with questions |
| `node index.js`   | Start the backend server         |

---

## 📬 Contact

Feel free to open an issue or contact me for support!
