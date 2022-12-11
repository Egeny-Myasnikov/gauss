export const get = (selector) => document.querySelector(selector);
export const getAll = (selector) => document.querySelectorAll(selector);
export const create = (selector, className) => {
  const el = document.createElement(selector);
  if (className) el.className = className;
  return el;
};
