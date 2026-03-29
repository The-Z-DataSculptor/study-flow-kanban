// 1. SETUP & GLOBALS
const masterInput = document.getElementById("master-input");
const columnSelector = document.getElementById("column-selector");
const columns = ["todo", "progress", "done"]; // The "Source of Truth" for your columns
let draggedCard = null;

// 2. SAVING (THE LOOP METHOD)
function saveBoard() {
  const boardData = {};

  columns.forEach((id) => {
    const list = document.querySelector(`#col-${id} .task-list`);
    // Clean up opacity before saving so cards don't stay faded in memory
    list.querySelectorAll(".card").forEach((c) => (c.style.opacity = "1"));
    boardData[id] = list.innerHTML;
  });

  localStorage.setItem("kanbanData", JSON.stringify(boardData));
}

// 3. LOADING (THE LOOP METHOD)
function loadBoard() {
  const saved = localStorage.getItem("kanbanData");
  if (!saved) return; // Exit if no data exists

  const data = JSON.parse(saved);
  columns.forEach((id) => {
    const list = document.querySelector(`#col-${id} .task-list`);
    if (data[id]) list.innerHTML = data[id];
  });

  attachDeleteEvents();
}

// 4. DELETE LOGIC (EFFICIENT)
function attachDeleteEvents() {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.onclick = function (e) {
      e.stopPropagation();
      this.parentElement.remove();
      saveBoard();
    };
  });
}

// 5. ADDING TASKS
masterInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && masterInput.value.trim() !== "") {
    const list = document
      .getElementById(columnSelector.value)
      .querySelector(".task-list");

    const card = document.createElement("div");
    card.className = "card";
    card.draggable = true;
    card.innerHTML = `<span>${masterInput.value}</span><button class="delete-btn">&times;</button>`;

    list.appendChild(card);
    masterInput.value = "";
    attachDeleteEvents();
    saveBoard();
  }
});

// 6. DRAG & DROP (CLEANED)
document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("card")) {
    draggedCard = e.target;
    e.dataTransfer.setData("text/plain", ""); // Firefox fix
    e.target.style.opacity = "0.5";
  }
});

document.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("card")) {
    e.target.style.opacity = "1";
    draggedCard = null;
  }
});

document.querySelectorAll(".column").forEach((col) => {
  col.addEventListener("dragover", (e) => e.preventDefault());
  col.addEventListener("drop", (e) => {
    e.preventDefault();
    const list = col.querySelector(".task-list");
    if (draggedCard && list) {
      list.appendChild(draggedCard);
      saveBoard();
    }
  });
});

// 7. INITIALIZE
loadBoard();
