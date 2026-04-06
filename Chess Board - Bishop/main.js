
const table = document.querySelector(".table");
let possiblePath;
for (let i = 0; i < 8; i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
        const tableData = document.createElement("td");
        tableData.setAttribute("data-index", `${i}-${j}`);
        tableData.textContent = `${i}-${j}`;
        tableData.classList.add("cell");
        if ((i + j) % 2 == 0) {
            tableData.classList.add("black");
        } else tableData.classList.add("white");

        tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
}

function topleft(ri, ci, possiblePath) {
    ri--;
    ci--;
    while (ri >= 0 && ci >= 0) {
        possiblePath[ri + "-" + ci] = true;
        ri--;
        ci--;
    }
}
function topright(ri, ci, possiblePath) {
    ri--;
    ci++;
    while (ri >= 0 && ci < 8) {
        possiblePath[ri + "-" + ci] = true;
        ri--;
        ci++;
    }
}
function bottomleft(ri, ci, possiblePath) {
    ri++;
    ci--;
    while (ri < 8 && ci >= 0) {
        possiblePath[ri + "-" + ci] = true;
        ri++;
        ci--;
    }
}
function bottomright(ri, ci, possiblePath) {
    ri++;
    ci++;
    while (ri < 8 && ci < 8) {
        possiblePath[ri + "-" + ci] = true;
        ri++;
        ci++;
    }
}
function clearHighlight() {
    possiblePath = {};
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.classList.remove("highlight");
    });
}
function addHighlight(possiblePath) {
    clearHighlight();
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        const dataIndexCell = cell.dataset.index;
        if (possiblePath[dataIndexCell]) {
            cell.classList.add("highlight");
        }
    })
}
table.addEventListener("mouseover", (e) => {
    const dataIndex = e.target.dataset.index;
    const [ri, ci] = dataIndex.split("-").map((idx) => parseInt(idx));
    possiblePath = {};
    possiblePath[dataIndex] = true;
    topleft(ri, ci, possiblePath);
    topright(ri, ci, possiblePath);
    bottomleft(ri, ci, possiblePath);
    bottomright(ri, ci, possiblePath);
    addHighlight(possiblePath);
});

