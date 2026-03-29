# study-flow-kanban

# 🎓 Study Flow | Academic Kanban Board

**Study Flow** is a lightweight, high-performance task management tool designed specifically for students. It helps users visualize their workflow by moving tasks from "To Do" to "Done" using a simple, intuitive drag-and-drop interface.



## 🚀 Live Demo
Check out the live application here: [Study Flow Live](https://the-z-datasculptor.github.io/study-flow-kanban/)

## ✨ Key Features
- **Persistence:** Uses `localStorage` to save your tasks. Your data stays on your device even if you refresh the page or close the browser.
- **Drag & Drop:** Built with native HTML5 Drag and Drop API for a smooth, app-like experience.
- **Mobile First:** Fully responsive design that stacks columns vertically on smaller screens for easy thumb-access.
- **Glassmorphism UI:** A modern aesthetic featuring frosted-glass effects and vibrant gradients.
- **Customization:** Add tasks directly to specific columns using the dynamic selector.

## 🛠️ Built With
- **HTML5:** Semantic structure and Drag & Drop API.
- **CSS3:** Flexbox, Media Queries, and Custom Transitions.
- **JavaScript (ES6):** DOM Manipulation and LocalStorage integration.

## 🧠 How it Works (The Logic)
This project follows a **State-Sync** algorithm. Any change made to the UI (adding, deleting, or moving a card) triggers a "save" function that snapshots the current state of the board and stores it as a JSON string in the browser's memory. When the page reloads, the "load" function parses that data and regenerates the board.

## 👤 Author
**Zain Hassan**
*Student & Web Developer*
GitHub: [@The-Z-DataSculptor](https://github.com/The-Z-DataSculptor)

---
*Created for college study and web development practice.*
