import { get, create } from "./helpers.js";

export const createField = (count) => {
  const app = get(".app");
  const res = create("button", "btn btn__reset");
  const inner = create("div", "inner");
  for (let i = 1; i <= count; i++) {
    const cell = create("button", "cell");
    cell.textContent = i;
    inner.append(cell);
  }
  res.textContent = "Сбросить";
  res.addEventListener("click", () => {
    const question = confirm("Удалить всё отмеченое?");
    if (question) {
      localStorage.clear();
      location.reload();
    }
  });

  app.append(res, inner);
};
