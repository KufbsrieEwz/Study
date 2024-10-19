const prompts = ['A ___ is the smallest, almost always microscopic unit of life', 'Postulate #1', 'Postulate #2', 'Postulate #3', 'A subcellular structure that has one or more specific jobs to perform in the cell', 'A threadlike structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes', 'A stable subatomic particle with a charge of negative electricity, found in all atoms and acting as the primary carrier of electricity in solids', 'It is the information storehouse of the cell; It contains chromosomes and controls all cell activities', 'The powerhouse of the cell', 'This is everything between the membrane of the cell and the nucleus', 'A space or vesicle within the cytoplasm of a cell enclosed by a membrane and typically containing food or fluids.', 'A green pigment found in green plants and cyanobacteria responsible for photosynthesis', 'A structural layer found immediately outside the cell membrane, and is only found in some cells, usually plant cells', `It protects the cell, keeping the cell's parts within, and encloses them. It is permeable to some substances and impermeable to others`, `___ are tiny structures within a cell that have varying shapes and functions. They are part of a cell's cytoplasm, and are suspended in a liquid called cytosol.`]
const words = ['Cell', 'All living things are made up of one or more cells', 'The cell is the basic unit of function in living things', 'All cells come from pre-existing cells', 'Organelle', 'Chromosome', 'Electron', 'Nucleus', 'Mitochondria', 'Cytoplasm', 'Vacuole', 'Chlorophyll', 'Cell Wall', 'Cell Membrane', 'Organelles']
let randomPlace
let answer
let score = 0
function run() {
    randomPlace = Math.floor(Math.random() * words.length)
    answer = prompt(prompts[randomPlace])
    if (typeof answer == 'string') {
        if (answer.toLowerCase() == words[randomPlace].toLowerCase()) {
            score++
            alert(`correct!\nyour streak is ${score}`)
        } else {
            alert(`incorrect.\nyour streak was ${score}\nthe correct answer was: ${words[randomPlace]}`)
            score = 0
        }
    }
    setTimeout(run, 500)
}
run()
