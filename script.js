//Goal is to create a webpage with a 16x16 grid of square divs
//Only Using JavaScript
//Uses Flexbox to handle grid; Grid will have hover effect


const container = document.createElement("div");
document.body.append(container);


//Creates a resisable NxN grid with dimension specified by input
function createDiv(userInput) {
    
    //Create NxN Grid generation based on user input
    const totalSquare = userInput * userInput;
    
    for (let i = 0; i < userInput; i++) {
        const square = document.createElement("div");
        square.id = "square-div";

        container.appendChild(square);
    }



}

//Clears all divs and content on Screen
function clearDiv(clearCondition) {



}

//Handles user interaction.
function userInteraction() {
    
    while (true) {

        const input = prompt("Please Type a Number: ");

        if (input === null) {
            alert("Action Cancelled by User");
            return;
        }

        if ( isNaN(input) || input.trim() === "" || Number(input) < 0 ) {

            alert("Invalid input, please enter a positive number!");
            continue;

        }

        const validNumber = Number(input);
        console.log("Success! Your number is:", validNumber);

        break;
    
    }
    





    }


