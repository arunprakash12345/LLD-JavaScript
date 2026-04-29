const row = document.querySelector("#rowRange");
const column = document.querySelector("#colRange");
const table = document.querySelector("#table");
const inputContainer = document.querySelector(".input-container");
let timeout;
let prevRow = Number(row.value);
let prevCol = Number(column.value);
function formTable(rowCount, columnCount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < rowCount; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < columnCount; j++) {
      const td = document.createElement("td");
      td.textContent = i + " - " + j;
      tr.appendChild(td);
    }
    fragment.appendChild(tr);
  }
  table.replaceChildren(fragment);
}

[row, column].forEach((el) => {
  el.addEventListener("input", handleInput);
});

function handleInput() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const rowCount = Number(row.value);
    const columnCount = Number(column.value);
    if (rowCount === prevRow && columnCount === prevCol) return;
    prevRow = rowCount;
    prevCol = columnCount;
    formTable(rowCount, columnCount);
  }, 150);
}

formTable(prevRow, prevCol);
