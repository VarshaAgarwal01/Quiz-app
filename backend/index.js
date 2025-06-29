const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Question = require('./models/Question');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/quizdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/api/quiz/:topic", async (req, res) => {
  const topic = req.params.topic;
  const auth = req.headers.authorization?.split(" ")[1];
  if (!auth) return res.status(401).json({ message: "No token provided" });

  // try 
  // {
  //   jwt.verify(auth, "secret");
  //   const questions = await Question.find({ topic }).limit(10);
  //   res.json({ questions });
  // } 
  try {
  jwt.verify(auth, "secret");
  const allQuestions = await Question.find({ topic });
  const questions = [];
  for (let i = 0; i < 10; i++)
     {
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    questions.push(allQuestions[randomIndex]);
     }
  res.json({ questions });
} 
  catch (e) {
    res.status(403).json({ message: "Invalid token" });
  }
});

app.listen(5000, () => console.log("Server started on http://localhost:5000"));