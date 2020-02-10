let gridContainerHTML = null;
let numbersGrid = [];
let colorsContainerHTML = null;
let hintRowsContainerHTML = null;
let colorClassNames = ['red', 'green', 'cyan', 'blue', 'yellow', 'maroon', 'pink', 'purple'];

function initHTMLElements() {
    gridContainerHTML = document.querySelector('.grid');
    colorsContainerHTML = document.querySelector('.colors-bar-container');
    hintRowsContainerHTML = document.querySelector('.hints-container');
}

function buildGrids() {
    numbersGrid = [...Array(10)].map(x => [...Array(4).fill(0)]);
    let row;
    for (let i = 0; i < 10; i++) {
        row = document.createElement('div');
        row.id = `row_${i}`;
        row.classList.add('rows');
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement('span');
            cell.id = `cell_[${i},${j}]`;
            cell.classList.add('cells');
            // btn.onclick = letterOnClickHandler;
            row.appendChild(cell);
        }
        gridContainerHTML.appendChild(row);
    }
}

function buildHintsGrid() {
    let row;
    for (let i = 0; i < 10; i++) {
        row = document.createElement('div');
        row.id = `hint_row_${i}`;
        row.classList.add('rows');
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement('span');
            cell.id = `hint_cell_[${i},${j}]`;
            cell.classList.add('cells', 'hints-cell');
            // btn.onclick = letterOnClickHandler;
            row.appendChild(cell);
        }
        hintRowsContainerHTML.appendChild(row);
    }
}

function buildColorsBar() {
    let color = null;
    for (let i = 0; i < 8; i++) {
        color = document.createElement('span');
        color.classList.add('cells', colorClassNames[i]);
        colorsContainerHTML.appendChild(color);
    }
}

function loadGame() {
    buildColorsBar();
    buildHintsGrid();
    buildGrids();
}

document.addEventListener("DOMContentLoaded", function(event) {
    initHTMLElements();
    loadGame();
});