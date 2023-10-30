const prompt = require("prompt-sync")();
// Prompt function 

console.log("WELCOME TO ROCK PAPER SCISSORS BROTHER!")

// Get Computer Answer Function
const getAnswer_Computer = () => {
    comans = Math.floor(Math.random() * 5)
    if (comans > 2){
        comans = comans - 3
    }
    return comans
}

// Main Game Function
const mainGame = () => {
    const options = ["Rock", "Paper", "Scissor", "Rock", "Paper", "Scissors"]
    const userOptionTemplate = `
    SELECT A MOVE!
    (1) > Rock
    (2) > Paper
    (3) > Scissor
    `
    console.log(userOptionTemplate)
    // Get User Move
    let userPrompt = prompt("Pick the moves comrade! ");
    userPrompt = userPrompt - 1
    userPrompt = parseInt(userPrompt)
    // Verification of User Answer
    if (typeof(userPrompt) != "number") {
        console.log("THAT IS NOT AN OPTIONS BLYAAT!")
        process.exit()
    }
    if (userPrompt > 2) {
        console.log("THAT IS NOT AN OPTIONS BLYAAT!")
        process.exit()
    }
    
    // Get Computer Answer
    let computePrompt = getAnswer_Computer()

    // Winning Qualification Logic
    if (options[userPrompt] === options[computePrompt]) {
        console.log("WOW IT's A TIE!, HOW COINCIDENCE IT IS!")
    }
    else if (userPrompt === 2 && computePrompt === 0) {
        console.log(`Computer wins with ${options[computePrompt]} vs ${options[userPrompt]} !`)
    }
    else if (userPrompt === 0 && computePrompt === 2) {
        console.log(`User wins with ${options[userPrompt]} vs ${options[computePrompt]}!`)
    }
    else if (userPrompt > computePrompt){
        console.log(`User wins with ${options[userPrompt]} vs ${options[computePrompt]}!`)
    }
    else if (computePrompt > userPrompt) {
        console.log(computePrompt)
        console.log(`Computer wins with ${options[computePrompt]} vs ${options[userPrompt]} !`)
    }
}


// Initialization
mainGame()