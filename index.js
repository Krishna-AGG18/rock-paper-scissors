// let youwin = 0;
// let compwin = 0;
// let user = document.querySelector(".choosed1");
// let comp = document.querySelector(".choosed2");
// let imgselected = document.querySelectorAll(".choose");

// //function to reset 
// const resetall = ()=>{
//     let button = document.getElementById("choice");
//     let result = document.getElementById("resultshow");
//     button.innerText = "Play Again!!";
//     button.addEventListener("click",()=>{
//         youwin = 0;
//         compwin = 0;
//         choicestr = "";
//         button.innerText = "Select your choice";
//         result.innerText = "First to win 3 rounds wins!!"
//     })
// }
// //function for comparison and computer
// const playGame = (userchoice)=>{
//     let num = Math.floor(Math.random()*3);
//     let choicestr = "";
//     if(num == 0){
//         let ch = document.createElement("img");
//         ch.src = "https://sihoonathan.github.io/rock-paper-scissors/assets/img/rock2.png";
//         ch.style.width = "15vmin";
//         console.log(ch);
//         comp.innerHTML = "";
//         comp.appendChild(ch);
//         choicestr = "rock"
//     }
//     else if (num ==1){
//         let ch = document.createElement("img");
//         ch.src = "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/paper.png";
//         ch.style.width = "15vmin";
//         console.log(ch);
//         comp.innerHTML = "";
//         comp.appendChild(ch);
//         choicestr = "paper"
//     }
//     else{
//         let ch = document.createElement("img");
//         ch.src = "https://sihoonathan.github.io/rock-paper-scissors/assets/img/scissors.png";
//         ch.style.width = "15vmin";
//         console.log(ch);
//         comp.innerHTML = "";
//         comp.appendChild(ch);
//         choicestr = "scissor";
//     }
//     if(choicestr == userchoice){
//         document.querySelector(".round-count").innerText = `It's a tie, ${userchoice} vs ${choicestr}`;
//     }
//     else if((choicestr == "rock" && userchoice == "paper")||(choicestr == "paper" && userchoice == "scissor")|| (choicestr == "scissor" && userchoice == "rock")){
//         youwin +=1;
//         document.getElementById("score1").innerText = `${youwin}`;  
//     }
//     else{
//         compwin +=1;
//         document.getElementById("score2").innerText = `${compwin}`; 
//     }
//     if(compwin == 3 || youwin == 3){
//         let result = document.getElementById("resultshow");
//         if(compwin == 3){
//             result.innerText = `Computer won the game !!`
//         }
//         else{
//             result.innerText = `You won the game !!`
//         }
//         resetall();
//     }
// }
// //function to display users choice 
// imgselected.forEach((imgg)=>{
//     imgg.addEventListener("click",()=>{
//         let ch = document.createElement("img");
//         ch.src = imgg.getAttribute("src");
//         ch.style.width = "15vmin";
//         console.log(ch);
//         user.innerHTML = "";
//         user.appendChild(ch);
//         let userchoice = imgg.getAttribute("id");
//         playGame(userchoice);
//         });
// })

let youwin = 0;
let compwin = 0;
let user = document.querySelector(".choosed1");
let comp = document.querySelector(".choosed2");
let imgselected = document.querySelectorAll(".choose");

// Helper function to create and display an image
const displayImage = (container, src) => {
    let img = document.createElement("img");
    img.src = src;
    img.style.width = "15vmin";
    container.innerHTML = ""; // Clear previous image
    container.appendChild(img);
};

// Reset function
const resetall = () => {
    let button = document.getElementById("choice");
    let result = document.getElementById("resultshow");

    button.innerText = "Play Again!!";
    let stopp = setInterval(() => {
        button.classList.toggle("hoverr");
    }, 1000);
    
    setTimeout(() => {
        clearInterval(stopp); // Stop the interval
        console.log("Interval stopped");
    
        // Check and remove the "hoverr" class if it exists
        const classes = button.getAttribute("class"); // Get the class attribute as a string
        if (classes && classes.split(" ").includes("hoverr")) { // Split into an array and check
            button.classList.remove("hoverr");
        }
    }, 5000);
    // Reset game state
    button.addEventListener("click", () => {
        youwin = 0;
        compwin = 0;

        document.getElementById("score1").innerText = "0"; // Reset user score
        document.getElementById("score2").innerText = "0"; // Reset computer score
        result.innerText = "First to win 3 rounds wins!!";
        user.innerHTML = ""; // Clear user choice
        comp.innerHTML = ""; // Clear computer choice
        button.innerText = "Select your choice";
        
        //wapas choose kr sake bc
        imgselected.forEach((imgg) => {
            imgg.style.pointerEvents = "auto"; // Enable clicking
        });
    }, { once: true }); // Ensure the event listener is added only once
};

// PlayGame function
const playGame = (userchoice) => {
    const choices = ["rock", "paper", "scissor"];
    const images = [
        "https://sihoonathan.github.io/rock-paper-scissors/assets/img/rock2.png",
        "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/paper.png",
        "https://sihoonathan.github.io/rock-paper-scissors/assets/img/scissors.png"
    ];

    // Random choice for computer
    let num = Math.floor(Math.random() * 3);
    let choicestr = choices[num];
    displayImage(comp, images[num]);

    // Determine the result
    if (choicestr === userchoice) {
        document.querySelector(".round-count").innerText = `It's a tie, ${userchoice} vs ${choicestr}`;
    } else if (
        (choicestr === "rock" && userchoice === "paper") ||
        (choicestr === "paper" && userchoice === "scissor") ||
        (choicestr === "scissor" && userchoice === "rock")
    ) {
        youwin += 1;
        document.querySelector(".round-count").innerText = `You won, ${userchoice} vs ${choicestr}`;
        document.getElementById("score1").innerText = `${youwin}`;
    } else {
        compwin += 1;
        document.querySelector(".round-count").innerText = `Computer won, ${userchoice} vs ${choicestr}`;
        document.getElementById("score2").innerText = `${compwin}`;
    }

    // Check for game end
    if (compwin === 3 || youwin === 3) {
        let result = document.getElementById("resultshow");
        result.innerText = compwin === 3 ? `Computer won the game !!` : `You won the game !!`;
        
        //user or choose na kare
        imgselected.forEach((imgg) => {
            imgg.style.pointerEvents = "none"; // Disable clicking
        });
        resetall();
    }
};

// Display user's choice and play game
imgselected.forEach((imgg) => {
    imgg.addEventListener("click", () => {
        let userchoice = imgg.getAttribute("id");
        displayImage(user, imgg.getAttribute("src")); // Display user's choice
        playGame(userchoice);
    });
});
