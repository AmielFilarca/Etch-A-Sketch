const gridContainer = document.querySelector('.grid-container')
const resetButton = document.querySelector('.btn-reset')
const resizeButton = document.querySelector('.btn-resize')
const rgbToggle = document.querySelector('.toggle-state')
let gridSize = 16
let color = '#494949'

function resetGrid() {
    gridContainer.style.boxShadow = '0 0 30px #494949';
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function generateRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function randomColorGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            let color = "#" + generateRandomColor();
            e.target.style.backgroundColor = color;
            gridContainer.style.boxShadow = '0 0 30px ' + color;
            console.log(e)
        });
    });
}

function blackColorGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#494949';
            gridContainer.style.boxShadow = '0 0 30px #494949';
            console.log(e)
        });
    });
}

resetButton.addEventListener('click', (e) => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#faf6e9'
        console.log(e)
    })
    resetGrid()
    createGrid(gridSize)
    if (checkToggle()) {
        randomColorGrid()
    } else {
        blackColorGrid()
    }
})

resizeButton.addEventListener('click', (e) => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#faf6e9'
        console.log(e)
    })
    resetGrid()
    gridSize = prompt('Enter grid size: ')
    createGrid(gridSize)
})

rgbToggle.addEventListener('click', (e) => {
    if (checkToggle()) {
        randomColorGrid()
    } else {
        blackColorGrid()
    }
})

function createGrid(gridSize) {
    if (gridSize < 16) {
        gridSize = 16
    }
    if (gridSize > 64) {
        gridSize = 64
    }
    for (let i = 0; i < gridSize; i++) {
        const rowContainer = document.createElement('div')
        rowContainer.classList.add('row-container')
        gridContainer.appendChild(rowContainer)
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            rowContainer.appendChild(cell)
        }
    }
    blackColorGrid()
}

function checkToggle() {
    return document.querySelector('.toggle-state').checked
}


createGrid(16)