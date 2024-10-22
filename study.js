const prompts = [
    'A ___ is the smallest, almost always microscopic unit of life', // Cell
    // 'Postulate #1',
    // 'Postulate #2',
    // 'Postulate #3',
    'A subcellular structure that has one or more specific jobs to perform in the cell', // Organelle
    'A threadlike structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes', // Chromosome
    'A stable subatomic particle with a charge of negative electricity, found in all atoms and acting as the primary carrier of electricity in solids', // Electron
    'It is the information storehouse of the cell; It contains chromosomes and controls all cell activities', // Nucleus
    'The powerhouse of the cell', // Mitochondria
    'This is everything between the membrane of the cell and the nucleus', // Cytoplasm
    'A space or vesicle within the cytoplasm of a cell enclosed by a membrane and typically containing food or fluids.', // Vacuole
    'A green pigment found in green plants and cyanobacteria responsible for photosynthesis', // Chlorophyll
    'A structural layer found immediately outside the cell membrane, and is only found in some cells, usually plant cells', // Cell Wall
    `It protects the cell, keeping the cell's parts within, and encloses them. It is permeable to some substances and impermeable to others`, // Cell Membrane
    `The liquid inside of a cell's cell membrane that takes up all the space not taken up by organelles and other parts of the cell.` // Cytosol
]
const words = [
    'Cell',
    // 'All living things are made up of one or more cells',
    // 'The cell is the basic unit of function in living things',
    // 'All cells come from pre-existing cells',
    'Organelle',
    'Chromosome',
    'Electron',
    'Nucleus',
    'Mitochondria',
    'Cytoplasm',
    'Vacuole',
    'Chlorophyll',
    'Cell Wall',
    'Cell Membrane',
    'Cytosol'
]
const hints = [
    'Hint: We looked at onion ___s under a microscope in class', // Cell
    // 'Hint: ',
    // 'Hint: ',
    // 'Hint: ',
    'Hint: Organs of the cell', // Organelle
    'Hint: XY and XX ___s', // Chromosomes
    'Hint: Evil twin of the positron', // Electron
    'Hint: It is the largest organelle', // Nucleus
    'How did you not get this', // Mitochondria
    'Hint: Phytoplasmic bacteria', // Cytoplasm
    'Hint: Kinda sounds like vacuum', // Vacuole
    'Hint: Chlorine fill', // Chlorophyll
    'Hint: Electric prison fence', // Cell Wall
    'Hint: Permeable shell', // Cell Membrane
    'Hint: This is often confused with something else' // Cytosol
]
let randomPlace
let lastRandom
let answer
let score = 0
let scoreHTML = document.getElementById('score')
let promptHTML = document.getElementById('prompt')
let hintHTML = document.getElementById('hint')
let inputHTML = document.getElementById('input')

scoreHTML.innerText = `Score: ${score}`

function ask() {
    hintHTML.innerText = ''
    lastRandom = randomPlace
    randomPlace = Math.floor(Math.random() * words.length)
    if (randomPlace == lastRandom) {
        ask()
    } else {
        promptHTML.innerText = prompts[randomPlace]
    }
}
function verify() {
    if (inputHTML.value.toLowerCase() == words[randomPlace].toLowerCase()) {
        score++
        scoreHTML.innerText = `Score: ${score}`
        inputHTML.value = ''
        setTimeout(ask, 5)
    } else if (hintHTML.innerText == '') {
        inputHTML.value = ''
        hintHTML.innerText = hints[randomPlace]
    } else {
        score = 0
        scoreHTML.innerText = score
        inputHTML.value = ''
        setTimeout(ask, 5)
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        verify()
        event.preventDefault()
    }
})

ask()
