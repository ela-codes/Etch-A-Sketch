const grid = document.querySelector('.container')

const resetButton = document.querySelector('button.reset')

let defaultSize = 16

createGrid(defaultSize)

function createGrid(gridSize) {
    // create a number of specified rows
    for (let i = 1; i <= gridSize; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('row')
        grid.appendChild(gridRow)
        // create number of specified boxes per row
        for (let j = 1; j <= gridSize; j++) {
            const box = document.createElement('div')
            box.classList.add('row', `${i}`)
            box.classList.add('box', `${j}`)
            if (gridSize >= 50) {
                box.classList.add('smallBox')
            }
            gridRow.appendChild(box)
        }
    }
    const gridBoxes = document.querySelectorAll('.box')
    
    gridBoxes.forEach(box => box.addEventListener('mouseover', e => changeBoxColor(e.target)))  // highlights boxes

    resetButton.addEventListener('click', () => resetBoxColor(gridBoxes)) 
}


// function that applies the "hovered" styling to that box wherein a mouseover event was triggered
function changeBoxColor(currentBox) {
    currentBox.classList.add('hovered')
}

// function that removes the "hovered" styling to all boxes
function resetBoxColor(gridBoxes) {
    gridBoxes.forEach(box => box.classList.remove('hovered'))
}


// function that removes the current grid
function removeGrid() {
    const allRows = document.querySelectorAll('.row')
    for (row of allRows) {
        row.parentNode.removeChild(row)
    }
}


// listen for new grid size input
const userInput = document.getElementById('gridSize')
userInput.addEventListener("keypress", event => changeGridSize(event))

function changeGridSize(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        removeGrid()
        let newSize = Number(userInput.value)
        if (newSize >= 2 && newSize <= 100) {
            createGrid(newSize)
        } else {
            createGrid(defaultSize)
        }
    }
}

