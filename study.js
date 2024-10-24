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
    'A structural layer found immediately outside the cell membrane', // Cell Wall
    `It protects the cell, keeping the cell's parts within, and encloses them. It is permeable to some substances and impermeable to others`, // Cell Membrane
    `The liquid inside of a cell's membrane that takes up all space not occupied by organelles`, // Cytosol
    'An organelle that helps transport, sort, and modify proteins and lipids for use elsewhere', // Golgi Apparatus
    'An organelle that produces proteins for the cell', // Endoplasmic Reticulum
    'This organelle helps break down and recycle waste within a cell', // Lysosome
    'A material that allows liquids or gases to pass through it', // Permeable
    'A material that does not allow liquids or gases to pass through it', // Impermeable
    'The amount of a given substance contained within a solution', // Concentration
    'The movement of molecules from an area of high concentration to low concentration', // Diffusion
    'The movement of molecules between a cell membrane and/or a cell wall from high concentration to low concentration', // Osmosis
    'An organism that consists of only one cell', // Unicellular Organism
    'An organism that consists of more than one cell', // Multicellular Organism
    'This organelle synthesizes proteins in the cell', // Ribosome
    'The stage of the microscope where the slide is placed for observation', // Stage
    'This lens magnifies the specimen in the microscope and is the one you look through', // Ocular Lens
    'These are used to hold a slide in position on the microscope stage', // Stage Clips
    'This microscope knob moves the stage up and down for focusing on the specimen', // Coarse Adjustment Knob
    'This structure helps focus light onto the specimen on the microscope stage', // Condenser Lens
    'This microscope knob moves the stage up and down but less. You use this to sharpen an image on the microscope', // Fine Adjustment Knob
    'This is where the objective lenses are mounted', // Revolving Nosepiece
    'This part beneath the stage is made of holes of varying sizes to change the amount of light that goes into the specimen', // Diaphragm
    'This is the where the light comes that illuminates the specimen comes from', // Lamp
    'This is the part that holds the tube in place', // Arm
    'This provides a stable platform for the microscope', // Base
    'This seperatese the ocular lens from the objective lenses', // Tube
    'These living things are unicellular', // Bacteria
    'A method of movement that utilizes stretching and changing shape', // Cytoplasmic Streaming
    'A method of movement that utilizes a tail that propels the bacteria through water', // Flagellum
    'A method of movement that utilizes hair-like protrusions to spiral through water', // Cilia
    'A type of bacteria that utilizes shape-changing to move', // Ameoba
    'A type of bacteria that utilizes a tail to move', // Euglena
    'A type of bacteria that utilizes hair-like protrusions to move', // Paramecia
    'A type of bacteria that need oxygen to survive',  // Aerobic
    'A type of bacteria that dies if given oxygen', // Anaerobic
    'A type of bacteria that can live without oxygen, but functions best with it', // Facultative Anaerobes
    'A type of bacteria that are harmful to you', // Pathogenic
    'A type of treatment that provents the reproduction of or directly kills bacteria', // Antibiotics
    'A type of food that contains good bacteria that fights off harmful bacteria and improves gut health', // Probiotics
    'Small parasites', // Viruses
    'A fully assembled version of a type of small parasite. These are versions of the parasite that are ready to infect you', // Virions
    'To enter a cell, this virus fuses with the membrane and then pushes itself through', // HIV
    'To enter a cell, this virus is engulfed by the cell', // Influenza
    'To enter a cell, this virus creates a porous channel of entry and burrows through the membrane', // Polio
    'If we inhale a virus, this bodily defense will kill it', // Mucous traps
    'If we swallow a virus, this bodily defense will kill it', // Stomach Acid
    'If the virus gets past the first line of defense, this bodily defense will kill it', // Innate Immune System
    'After an infenction, these cells retain a memory of any previous infection and they form antibodies', // Lymphocytes
    'This is a protective measure, usually taken as a shot, that contains a weakend or dead version of a microbe to create antibodies against it', // Vaccine
    'This is a possible way that bacteria or viruses can enter the body. It has to do with the holes that are used for living', // Respiratory Passages
    'This is a possible way that bacteria or viruses can enter the body. It has to do with holes that are created from accidents', // Open Wounds
    '1. Viruses need to access ______.', // Step 1 of infiltration 
    '2. Viruses will then attach themselves to host ______.', // Step 2 of infiltration
    '3. After a virus binds to the surfact of the host cell, they will then try to ______ the host cell.', // Step 3 of infiltration
    '4. Once inside, viruses release their ______ and then replicates.' // Step 4 of infiltration
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
    'Concentration',
    'Diffusion',
    'Osmosis',
    'Unicellular',
    'Multicellular',
    'Ribosome',
    'Stage',
    'Ocular Lens',
    'Stage Clips',
    'Coarse Adjustment Knob',
    'Condenser Lens',
    'Fine Adjustment Knob',
    'Revolving Nosepiece',
    'Diaphragm',
    'Lamp',
    'Arm',
    'Base',
    'Tube',
    'Bacteria',
    'Cytoplasmic Streaming',
    'Flagellum',
    'Cilia',
    'Ameoba',
    'Euglena',
    'Paramecia',
    'Aerobic', 
    'Anaerobic',
    'Facultative Anaerobes',
    'Pathogenic',
    'Antibiotics',
    'Probiotics',
    'Viruses',
    'Virions',
    'HIV',
    'Influenza',
    'Polio',
    'Mucous traps',
    'Stomach Acid',
    'Innate Immune System',
    'Lymphocytes',
    'Vaccine',
    'Respiratory Passages',
    'Open wounds',
    "The inside of a host's body",
    'Cell surfaces',
    'Enter',
    'Deoxyribonucleic acid'
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
    'Hint: ', // Chlorophyll
    'Hint: Found in plant cells, not animal cells', // Cell Wall
    'Hint: Permeable shell', // Cell Membrane
    'Hint: This is often confused with something else', // Cytosol
    'Hint: ', // Golgi Apparatus
    'Hint: Rough and smooth versions exist', // Endoplasmic Reticulum
    'Hint: ', // Lysosome
    'Hint: You might think of the definition of this as "A descriptor meaning some things can go through and some cant"', // Permeable
    'Hint: You might think of the definition of this as "A descriptor meaning that nothing can go through"', // Impermeable
    'Hint: Density', // Concentration
    'Hint: ', // Diffusion
    'Hint: ', // Osmosis
    'Hint: ', // Unicellular Organism
    'Hint: ', // Multicellular Organism
    'Hint: ', // Ribosome
    'Hint: ', // Stage
    'Hint: ', // Ocular Lens/Eyepiece
    'Hint: ', // Stage Clips
    'Hint: ', // Coarse Adjustment Knob
    'Hint: ', // Condenser Lens
    'Hint: ', // Fine Adjustment Knob
    'Hint: ', // Revolving Nosepiece
    'Hint: ', // Diaphragm
    'Hint: This can also be called the light source', // Lamp
    'Hint: You also hold onto this to carry and move the microscope', // Arm
    'Hint: What do you call what something bottom of something that holds everything up?', // Base
    'Hint: ', // Tube
    'Hint: ', // Bacteria
    'Hint: Ameoba use this to move', // Cytoplasmic Streaming
    'Hint: Euglena use this to move', // Flagellum
    'Hint: Paramecia use this to move', // Cilia
    'Hint: The method of movement is called Cytoplasmic Streaming', // Ameoba
    'Hint: The method of movement is with a Flagellum', // Euglena
    'Hint: The method of movement is with Cilia', // Paramecia
    'Hint: Only type the adjective',  // Aerobic
    'Hint: Only type the adjective', // Anaerobic
    'Hint: Contrary to the other two, type the noun (it is plural as well)', // Facultative Anaerobes
    'Hint: The word comes from two Greek terms. One meaning harm or sickness, and the other being a suffix meaning " to cause/create"', // Pathogenic
    'Hint: Plural', // Antibiotics
    'Hint: Plural', // Probiotics
    'Hint: These parasites can be very deadly and constantly being debated on if they are living or not', // Viruses
    'Hint: If you somehow could not tell, the "small parasite" is a virus', // Virions
    'Hint: ', // HIV
    'Hint: ', // Influenza
    'Hint: ', // Polio
    'Hint: ', // Mucous traps
    'Hint: ', // Stomach Acid
    'Hint: ', // Innate Immune System
    'Hint: This is a collective term for T cells and B cells', // Lymphocytes
    'Hint: You get multiple of these when you are just born', // Vaccine
    'Hint: Has to do with breathing', // Respiratory Passages
    'Hint: Could possibly be from cuts', // Open Wounds
    'Hint: ', // Step 1 of infiltration 
    'Hint: ', // Step 2 of infiltration
    'Hint: ', // Step 3 of infiltration
    'Hint: I am challenging you to spell this one, however you should know the abbreviation at the least' // Step 4 of infiltration
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
