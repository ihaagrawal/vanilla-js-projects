# 🎨 Unlimited Colors

A simple and interactive web project that changes the background color of the page every second using random RGB values.

---

## 🚀 Features

* 🎲 Generates random RGB colors
* ⏱ Changes background color every 1 second
* ▶️ Start button to begin color changes
* ⏹ Stop button to stop and reset background
* 🛡️ Prevents multiple intervals from running simultaneously
* 🧠 Built using basic HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```bash
Unlimited-Colors/
│── index.html
│── style.css
│── script.js
```

---

## 📸 How It Works

1. Click the **Start** button
2. Background color changes every second
3. Multiple clicks on **Start** will NOT create extra intervals
4. Click the **Stop** button
5. Background resets to white

---

## 💡 Core Logic

* Uses `setInterval()` to repeatedly change colors
* Uses `clearInterval()` to stop execution
* Maintains a shared interval reference to control execution safely
* Prevents multiple intervals using a guard condition

Example:

```javascript
let changingColors = null;

function changeColors() {
    if (changingColors !== null) return;

    changingColors = setInterval(() => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }, 1000);
}

function stopColors() {
    clearInterval(changingColors);
    changingColors = null;
}
```

---

## ▶️ How to Run

1. Clone the repository or download files
2. Open `index.html` in your browser
3. Click **Start** to begin 🎉

---

## 🌟 Future Improvements

* Add smooth color transitions (CSS animations)
* Display current RGB value on screen
* Add speed control (slider)
* Add dark/light mode toggle

---

## 📌 Author

* **Iha Agrawal**

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to contribute!
