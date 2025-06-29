document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) {
    console.error("Missing <div id='app'> in index.html");
    return;
  }

  renderLogin();

  function renderLogin() {
    app.innerHTML = `
      <div class="container">
        <h2>Login</h2>
        <form id="loginForm">
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p id="loginMessage"></p>
      </div>
    `;

    document.getElementById("loginForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const res = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          localStorage.setItem("token", data.token);
          renderTopicSelection();
        } else {
          document.getElementById("loginMessage").textContent =
            data.message || "Login failed";
        }
      } catch (error) {
        document.getElementById("loginMessage").textContent =
          "Server error. Please try again.";
      }
    });
  }

  function renderTopicSelection() {
    const topics = [
      "Math",
      "Science",
      "History",
      "Geography",
      "Sports",
      "Technology",
    ];

    app.innerHTML = `
      <div class="container">
        <h2>Select a Topic</h2>
        <div class="topics">
          ${topics
            .map(
              (topic) =>
                `<button class="topic-btn" data-topic="${topic}">${topic}</button>`
            )
            .join("")}
        </div>
      </div>
    `;

    document.querySelectorAll(".topic-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedTopic = btn.getAttribute("data-topic");
        startQuiz(selectedTopic);
      });
    });
  }

  async function startQuiz(topic) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/quiz/${topic}`, {
        headers: { Authorization: "Bearer " + token },
      });
      const data = await res.json();
      renderQuiz(data.questions, topic);
    } catch (err) {
      app.innerHTML =
        "<div class='container'><p>Error fetching questions.</p></div>";
    }
  }

  function renderQuiz(questions, topic) {
    let current = 0;
    let score = 0;

    function showQuestion() {
      if (current >= questions.length) {
        app.innerHTML = `
          <div class="container">
            <h2>Quiz Finished</h2>
            <p>Score: ${score} / ${questions.length}</p>
          </div>
        `;
        return;
      }

      const q = questions[current];
      app.innerHTML = `
        <div class="container">
          <h2>${topic} - Question ${current + 1}</h2>
          <p>${q.question}</p>
          ${q.options
            .map(
              (opt, i) =>
                `<button class="opt" data-idx="${i}">${opt}</button>`
            )
            .join("")}
        </div>
      `;

      document.querySelectorAll(".opt").forEach((btn) => {
        btn.addEventListener("click", () => {
          const selected = Number(btn.getAttribute("data-idx"));
          if (selected === q.correctOption) score++;
          current++;
          showQuestion();
        });
      });
    }

    showQuestion();
  }
});
