# 🎯 Guess The Number

A fun and interactive **number guessing game** built using **HTML, CSS, and JavaScript**.
The user has to guess a randomly generated number between **1 and 100** within **10 attempts**.

---

## 🚀 Features

* Random number generation between 1–100
* 10 attempts to guess the correct number
* Real-time feedback:

  * Too high
  * Too low
  * Correct guess
* Displays previous guesses
* Tracks remaining attempts
* Input validation (empty / invalid / out-of-range)
* Game disables input after win or loss

---

## 📂 Project Structure

```
Guess-The-Number/
│── index.html
│── style.css
│── script.js
```

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the game
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Game logic and DOM manipulation

---

## 📖 How It Works

1. A random number between **1 and 100** is generated:

   ```
   Math.floor(Math.random() * 100) + 1
   ```

2. User enters a guess and clicks **Guess**

3. The app:

   * Validates input
   * Stores previous guesses
   * Decreases remaining attempts

4. Feedback is shown:

   * If guess is correct → 🎉 Win
   * If guess is low → "Too low!"
   * If guess is high → "Too high!"

5. Game ends when:

   * User guesses correctly
   * OR runs out of attempts

---

## ▶️ How to Run

1. Download or clone the project
2. Open `index.html` in your browser
3. Enter a number and click **Guess**

---

## 💡 Example

```
Random Number: 42

Guesses:
20 → Too low  
60 → Too high  
42 → 🎉 Correct!
```

---

## 🔧 Possible Improvements

* Add a **Restart Game** button
* Add difficulty levels (Easy/Medium/Hard)
* Add sound effects 🎵
* Add animations or transitions
* Track best score
* Make it mobile responsive

---

## 📌 Author

**Iha Agrawal**

---

## 📄 License

This project is open-source and free to use.
