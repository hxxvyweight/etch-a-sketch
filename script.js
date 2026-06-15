//Goal is to create a webpage with a 16x16 grid of square divs
//Only Using JavaScript
//Uses Flexbox to handle grid; Grid will have hover effect


const container = document.createElement("div");


//Creates a resisable NxN grid with dimension specified by input
function createDiv(num) {
    
    //Create NxN Grid generation based on user input
    const totalSquare = num * num;
    
    for (let i = 0; i < num; i++) {
        const square = document.createElement("div");
        square.id = "square-div";

        container.appendChild(square);
    }



}

//Clears all divs and content on Screen
function clearDiv() {



}

//Handles user interaction.
function userInteraction() {



}
