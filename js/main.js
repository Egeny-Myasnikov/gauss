import { get, getAll, create } from "./helpers.js";

const ls = localStorage;

const app = get(".app");

const inner = create("div", "inner");

const createCell = () => {
  for (let i = 1; i <= 100; i++) {
    const cell = create("button", "cell");
    cell.textContent = i;
    inner.append(cell);
  }
};
createCell();
app.append(inner);

const cells = getAll(".cell");
const lsCompleted = ls.getItem("completed");
const completed = JSON.parse(lsCompleted) || [];
cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    cell.classList.add("completed");
    completed.push(cell.textContent);
    const completedSTR = JSON.stringify(completed);
    ls.setItem("completed", completedSTR);
    const completedLS = ls.getItem("completed");
    const completedPARSE = JSON.parse(completedLS);
    console.log(completedPARSE);
  });
});

if (completed.length) {
  completed.forEach((c) => {
    cells[c - 1].classList.add("completed");
  });
}

// const arr = [1, 2, 3];
// const arrStr = JSON.stringify(arr);
// const arrPars = JSON.parse(arrStr);
// console.log(arrStr);
// console.log(arrPars);
