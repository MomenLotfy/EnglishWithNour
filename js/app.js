// js/app.js
import grammarData from "../js/index.js";

const tabsContainer = document.getElementById("grammar-tabs");
const contentContainer = document.getElementById("grammar-content");

// Generate tabs dynamically
Object.keys(grammarData).forEach(level => {
  const btn = document.createElement("button");
  btn.textContent = level;
  btn.onclick = () => showTopics(level);
  tabsContainer.appendChild(btn);
});

function showTopics(level) {
  contentContainer.innerHTML = "";
  grammarData[level].forEach(topic => {
    const div = document.createElement("div");
    div.className = "topic";
    div.innerHTML = `
      <h2>${topic.title}</h2>
      <p>${topic.explanation}</p>
      <button onclick="alert('Exercises for ${topic.title}')">Practice</button>
    `;
    contentContainer.appendChild(div);
  });
}
