// const prompts = [
//     'A ___ is the smallest, almost always microscopic unit of life', // Cell
//     'Postulate #1',
//     'Postulate #2',
//     'Postulate #3',
//     'A subcellular structure that has one or more specific jobs to perform in the cell', // Organelle
//     'A threadlike structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes', // Chromosome
//     'A stable subatomic particle with a charge of negative electricity, found in all atoms and acting as the primary carrier of electricity in solids', // Electron
//     'It is the information storehouse of the cell; It contains chromosomes and controls all cell activities', // Nucleus
//     'The powerhouse of the cell', // Mitochondria
//     'This is everything between the membrane of the cell and the nucleus', // Cytoplasm
//     'A space or vesicle within the cytoplasm of a cell enclosed by a membrane and typically containing food or fluids.', // Vacuole
//     'A green pigment found in green plants and cyanobacteria responsible for photosynthesis', // Chlorophyll
//     'A structural layer found immediately outside the cell membrane, and is only found in some cells, usually plant cells', // Cell Wall
//     `It protects the cell, keeping the cell's parts within, and encloses them. It is permeable to some substances and impermeable to others`, // Cell Membrane
//     `The liquid inside of a cell's cell membrane that takes up all the space not taken up by organelles and other parts of the cell.` // Cytosol
// ]
// const words = [
//     'Cell',
//     'All living things are made up of one or more cells',
//     'The cell is the basic unit of function in living things',
//     'All cells come from pre-existing cells',
//     'Organelle',
//     'Chromosome',
//     'Electron',
//     'Nucleus',
//     'Mitochondria',
//     'Cytoplasm',
//     'Vacuole',
//     'Chlorophyll',
//     'Cell Wall',
//     'Cell Membrane',
//     'Cytosol'
// ]
// const hints = [
//     'Hint: We looked at onion ___s under a microscope in class', // Cell
//     'Hint: ',
//     'Hint: ',
//     'Hint: ',
//     'Hint: Organs of the cell', // Organelle
//     'Hint: XY and XX ___s', // Chromosomes
//     'Hint: Evil twin of the positron', // Electron
//     'Hint: It is the largest organelle', // Nucleus
//     'How did you not get this', // Mitochondria
//     'Hint: Phytoplasmic bacteria', // Cytoplasm
//     'Hint: Kinda sounds like vacuum', // Vacuole
//     'Hint: Chlorine fill', // Chlorophyll
//     'Hint: Electric prison fence', // Cell Wall
//     'Hint: Permeable shell', // Cell Membrane
//     'Hint: This is often confused with something else' // Cytosol
// ]
const prompts = [
    'A ___ is the smallest, almost always microscopic unit of life', // Cell
    'Postulate #1',
    'Postulate #2',
    'Postulate #3',
    'The scientist who invented the first compound microscope in 1595', // Zacharias Janseen
    'The scientist who discovered the first cell in 1663', // Robert Hooke
    'The scientist who first discovered microorganisms in 1674', // Anton van Leeuwenhoek
    'Discovered that each plant cell is contained in a continuous membrane in 1809', // Charles-Francois Brisseau de Mirbel
    'This scientist stated that plant and animal cells are the basic units of life in 1824', // Henri Dutrochet
    'The two scientists who co-founded the postulate that all living things are made of cells or cell products', // Theodor Schwann and Mattias Jakob Schleiden
    'The scientist who discovered in 1855 that all cells come from pre-existing cells', // Rudolph Virchow
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
    `The liquid inside of a cell's membrane that takes up all space not occupied by organelles`, // Cytosol
    'An organelle that helps transport, sort, and modify proteins and lipids for use elsewhere', // Golgi Apparatus
    'An organelle that produces proteins for the cell; made up of smooth and rough types', // Endoplasmic Reticulum
    'This organelle helps break down and recycle waste within a cell', // Lysosome
    'A material that allows liquids or gases to pass through it', // Permeable
    'A material that does not allow liquids or gases to pass through it', // Impermeable
    'The movement of molecules from an area of high concentration to low concentration', // Diffusion
    'The process by which solvent molecules pass through a semipermeable membrane from a less concentrated to a more concentrated solution', // Osmosis
    'An organism that consists of only one cell', // Unicellular Organism
    'An organism that consists of more than one cell', // Multicellular Organism
    'The stage of the microscope where the slide is placed for observation', // Stage
    'This lens magnifies the specimen in the microscope and is the one you look through', // Ocular Lens/Eyepiece
    'These are used to hold a slide in position on the microscope stage', // Stage Clips
    'This microscope knob moves the stage up and down for focusing on the specimen', // Coarse Adjustment Knob
    'This organelle synthesizes proteins in the cell', // Ribosome
    'This structure helps focus light onto the specimen on the microscope stage', // Condenser Lens
]
const words = [
    'Cell',
    'All living things are made up of one or more cells',
    'The cell is the basic unit of function in living things',
    'All cells come from pre-existing cells',
    'Zacharias Janseen',
    'Robert Hooke',
    'Anton van Leeuwenhoek',
    'Charles-Francois Brisseau de Mirbel',
    'Henri Dutrochet',
    'Theodor Schwann and Mattias Jakob Schleiden',
    'Rudolph Virchow',
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
    'Cytosol',
    'Golgi Apparatus',
    'Endoplasmic Reticulum',
    'Lysosome',
    'Permeable',
    'Impermeable',
    'Diffusion',
    'Osmosis',
    'Unicellular',
    'Multicellular',
    'Stage',
    'Ocular Lens',
    'Stage Clips',
    'Coarse Adjustment Knob',
    'Ribosome',
    'Condenser Lens',
]
const hints = [
    'Hint: We looked at onion ___s under a microscope in class', // Cell
    'Hint: This postulate says all living things have this in common', // Postulate #1
    'Hint: Fundamental building block', // Postulate #2
    'Hint: Reproduction of cells', // Postulate #3
    'Hint: Inventor of a crucial tool for biology', // Zacharias Janseen
    'Hint: Named the "cell"', // Robert Hooke
    'Hint: Discovered microorganisms', // Anton van Leeuwenhoek
    'Hint: Continuous membrane discovery', // Charles-Francois Brisseau de Mirbel
    'Hint: The unit of both plant and animal life', // Henri Dutrochet
    'Hint: Two founders of cell theory', // Theodor Schwann and Mattias Jakob Schleiden
    'Hint: Discovered cell reproduction', // Rudolph Virchow
    'Hint: Organs of the cell', // Organelle
    'Hint: XY and XX ___s', // Chromosomes
    'Hint: Negative charge', // Electron
    'Hint: It controls all cell activities', // Nucleus
    'How did you not get this', // Mitochondria
    'Hint: Jelly-like substance surrounding organelles', // Cytoplasm
    'Hint: Kinda sounds like vacuum', // Vacuole
    'Hint: Responsible for photosynthesis', // Chlorophyll
    'Hint: Found in plant cells, not animal cells', // Cell Wall
    'Hint: Permeable shell', // Cell Membrane
    'Hint: This is often confused with something else', // Cytosol
    'Hint: Helps move proteins and lipids', // Golgi Apparatus
    'Hint: Rough and smooth versions exist', // Endoplasmic Reticulum
    'Hint: Breaks down waste', // Lysosome
    'Hint: Allows liquids and gases to pass', // Permeable
    'Hint: Blocks substances from passing', // Impermeable
    'Hint: Movement from high to low concentration', // Diffusion
    'Hint: A process involved in water balance across membranes', // Osmosis
    'Hint: One cell only', // Unicellular Organism
    'Hint: More than one cell', // Multicellular Organism
    'Hint: Place for slide observation', // Stage
    'Hint: Lens you look through', // Ocular Lens/Eyepiece
    'Hint: Holds the slide in place', // Stage Clips
    'Hint: Moves stage to focus', // Coarse Adjustment Knob
    'Hint: Protein synthesis machine', // Ribosome
    'Hint: Focuses light', // Condenser Lens
]

let randomPlace
let lastRandom
let answer
let score = 0
let questions = 0
let totalScore = 0
let acc = NaN
let scoreHTML = document.getElementById('score')
let promptHTML = document.getElementById('prompt')
let hintHTML = document.getElementById('hint')
let inputHTML = document.getElementById('input')
let accHTML = document.getElementById('acc')

scoreHTML.innerText = `Score: ${score}`
accHTML.innerText = `Accuracy: ${Math.round(acc*100)}% (${totalScore} / ${questions})`

function ask() {
    hintHTML.innerText = ''
    lastRandom = randomPlace
    randomPlace = Math.floor(Math.random() * words.length)
    if (randomPlace == lastRandom) {
        ask()
    } else {
        promptHTML.innerText = prompts[randomPlace]
        questions++
    }
}
function verify() {
    if (inputHTML.value.toLowerCase() == words[randomPlace].toLowerCase()) {
        score++
        totalScore++
        acc = totalScore / questions
        scoreHTML.innerText = `Score: ${score}`
        accHTML.innerText = `Accuracy: ${Math.round(acc*100)}% (${totalScore} / ${questions})`
        inputHTML.value = ''
        setTimeout(ask, 5)
    } else if (hintHTML.innerText == '') {
        inputHTML.value = ''
        hintHTML.innerText = hints[randomPlace]
    } else {
        score = 0
        scoreHTML.innerText = `Score: ${score}`
        inputHTML.value = ''
        acc = totalScore / questions
        accHTML.innerText = `Accuracy: ${Math.round(acc*100)}% (${totalScore} / ${questions})`
        hintHTML.innerText = words[randomPlace]
        setTimeout(ask, 3000)
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        verify()
        event.preventDefault()
    }
})

ask()
