const words = ["apple","book","cat","pen", "toytrain"];
const randomWord = words[Math.floor(Math.random() * words.length)];
const visitedArray = [];
const correctChar = [];
const wrongChar = [];

console.log(randomWord);

function showChar() {
    document.getElementById("word").innerHTML = 
    `
    ${randomWord.split("").map((letter) => 
        `
        <span class = "letter"> 
            ${correctChar.includes(letter) ? letter : ""}
        </span>
        `
    ).join("")
    }
    `;    
}
function updateIncorrectChar() {
    document.querySelector("#wrong-letter-container").innerHTML =
    `
    <p> Wrong Char Guessed </p>
    `;
}
updateIncorrectChar();
showChar();

window.addEventListener("keydown", (e) => {
    if(e.key >= 'a' && e.key <= 'z')    {
        if(visitedArray.includes(e.key))    {
            // show alert
        }   else    {
            visitedArray.push(e.key);
            if(randomWord.includes(e.key))  {
                correctChar.push(e.key);
                showChar();
                // Correct character
            }   else    {
                wrongChar.push(e.key);
                // Wrong character
            }
            console.log(visitedArray);
            console.log(wrongChar);
            console.log(correctChar);
        }
    }   else    {
        console.log("bad character...");
    }
})