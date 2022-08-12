// create main grid container
const grid = document.querySelector('.container')

// default size of grid is 16 x 16
let gridSize = 16
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
        gridRow.appendChild(box)
    }
}

// listen for a mouseover event for each box in the grid
const gridBoxes = document.querySelectorAll('.box')

gridBoxes.forEach(box => box.addEventListener('mouseover', e => changeBoxColor(e.target)))


// function that applies the "hovered" styling to that box wherein a mouseover event was triggered
function changeBoxColor(currentBox) {
    currentBox.classList.add('hovered')
}

// a reset button that calls resestBoxColor() if clicked
const resetButton = document.querySelector('button.reset')

resetButton.addEventListener('click', () => resetBoxColor(gridBoxes))


// function that removes the "hovered" styling to all boxes
function resetBoxColor(gridBoxes) {
    gridBoxes.forEach(box => box.classList.remove('hovered'))
}

// listen for new grid size input, code setup but not yet working

// function changeGridSize(event) {
//     event.preventDefault();
//     console.log(event)
    
// }

// const userInput = document.querySelector('#inputSize')

// userInput.addEventListener('submit', event => changeGridSize(event))
