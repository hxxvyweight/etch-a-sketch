//Goal is to create a webpage with a 16x16 grid of square divs
//Only Using JavaScript
//Uses Flexbox to handle grid; Grid will have hover effect


const container = document.createElement("div");
container.id = "container";
document.body.append(container);


//Creates a resisable NxN grid with dimension specified by input
function createDiv(userInput) {
    
    const totalSquares = userInput * userInput; 
    
    //Create NxN Grid generation based on user input
    
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square-div");
        square.textContent = "Im a square";
        

        container.appendChild(square);
    }



}

//Clears all divs and content on Screen
function clearDiv(clearCondition) {



}

//Handles user interaction.
function userInteraction() {
    
    //Handles Unknown Values/Invalid Input
    while (true) {

        const input = prompt("Please Type a Number: ");

        if ( input === null ) {
            alert("Action Cancelled by User");
            return;
        }

        if (input > 100) {
            alert("Number Cap Reached. Only integers < 100 are allowed.")
            continue;
        }

        if ( isNaN(input) || input.trim() === "" || Number(input) < 0 ) {

            alert( "Invalid input, please enter a positive number!" );
            continue;

        }
        
        //
        const validNumber = Number(input);
        return validNumber;
        console.log("Success! Your number is:", validNumber);
        console.log("Generating...");

        break;
    
    }
    





    }

//Execution
createDiv(userInteraction());

