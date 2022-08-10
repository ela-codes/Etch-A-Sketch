const grid = document.querySelector('.container')

for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div')
    gridRow.classList.add('row')
    grid.appendChild(gridRow)
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div')
        box.classList.add('box')
        gridRow.appendChild(box)
    }
}