import { getAll, ls, create } from "./helpers.js";
import { createField } from "./createField.js";

createField(100);

const cells = getAll(".cell");
const completed = JSON.parse(ls.getItem("completed")) || [];
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.classList.add("completed");
    completed.push(cell.textContent);
    ls.setItem("completed", JSON.stringify(completed));
  });
});

completed.length &&
  completed.forEach((c) => cells[c - 1].classList.add("completed"));
