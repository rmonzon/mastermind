let gridContainerHTML = null;
let numbersGrid = [];
let colorsContainerHTML = null;
let hintRowsContainerHTML = null;
let colorClassNames = ['red', 'green', 'cyan', 'blue', 'yellow', 'maroon', 'pink', 'purple'];
let lastColorCellSelected = null;

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
            cell.onclick = emptyColorCellOnClickHandler;
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
    let colorCircle = null;
    for (let i = 0; i < 8; i++) {
        colorCircle = document.createElement('span');
        colorCircle.id = `${colorClassNames[i]}`;
        colorCircle.classList.add('cells', colorClassNames[i]);
        colorCircle.onclick = this.colorOnClickHandler;
        colorsContainerHTML.appendChild(colorCircle);
    }
}

function resetSelection() {
    lastColorCellSelected.classList.remove('color-cell--selected');
    lastColorCellSelected.classList.add('guess-cell--selected');
    lastColorCellSelected = null;
}

function selectGuessColorCell(cellElement) {
    if (lastColorCellSelected) {
        cellElement.classList.add(lastColorCellSelected.id);
        resetSelection();
    }
}

function isColorCellSelected(cell) {
    return cell.className.includes('guess-cell--selected');
}

function emptyColorCellOnClickHandler(e) {
    const cell = e.target;
    if (!isColorCellSelected(cell)) {
        selectGuessColorCell(cell);
    }
}

function colorOnClickHandler(e) {
    const cell = e.target;
    console.log(cell.id);
    if (!isColorCellSelected(cell)) {
        if (lastColorCellSelected) {
            lastColorCellSelected.classList.toggle('color-cell--selected');
        }
        lastColorCellSelected = e.target;
        lastColorCellSelected.classList.toggle('color-cell--selected');
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