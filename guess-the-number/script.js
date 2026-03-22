// Generate random number
const randomNumber = Math.floor(Math.random() * 100) + 1;

let remaining = 10;
let prevGuesses = [];

const input = document.getElementById("guess");
const button = document.getElementById("btn");
const prev = document.getElementById("prev");
const rem = document.getElementById("rem");
const message = document.getElementById("message");

button.addEventListener("click", handleGuess);

function handleGuess() {
    const value = input.value.trim();
    const guess = Number(value);

    // ❌ Invalid input
    if (value === "" || isNaN(guess)) {
        message.innerText = "Please enter a valid number";
        return;
    }

    // ❌ Out of range
    if (guess < 1 || guess > 100) {
        message.innerText = "Enter number between 1 and 100";
        return;
    }

    // ✅ Store guess
    prevGuesses.push(guess);
    prev.innerText = "Previous Guess: " + prevGuesses.join(", ");

    remaining--;
    rem.innerText = "Guesses Remaining: " + remaining;

    // 🎯 Game logic
    if (guess === randomNumber) {
        message.innerText = "🎉 Correct! You guessed it!";
        endGame();
    } else if (remaining === 0) {
        message.innerText = `Game Over! Number was ${randomNumber}`;
        endGame();
    } else if (guess < randomNumber) {
        message.innerText = "Too low!";
    } else {
        message.innerText = "Too high!";
    }

    input.value = "";
}

function endGame() {
    input.disabled = true;
    button.disabled = true;
}