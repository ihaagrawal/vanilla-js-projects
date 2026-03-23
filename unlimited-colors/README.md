# 🎨 Unlimited Colors

A simple and interactive web project that changes the background color of the page every second using random RGB values.

---

## 🚀 Features

* 🎲 Generates random RGB colors
* ⏱ Changes background color every 1 second
* ▶️ Start button to begin color changes
* ⏹ Stop button to stop and reset background
* 🧠 Built using basic HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```
Unlimited-Colors/
│── index.html
│── style.css
│── script.js
```

---

## 📸 How It Works

1. Click the **Start** button
2. Background color changes every second
3. Click the **Stop** button
4. Background resets to white

---

## 💡 Core Logic

* Uses `setInterval()` to repeatedly change colors
* Uses `clearInterval()` to stop execution
* Generates random RGB values between `0 - 255`

Example:

```javascript
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
```

---

## ▶️ How to Run

1. Clone the repository or download files
2. Open `index.html` in your browser
3. Click **Start** to begin 🎉

---

## ⚠️ Notes

* Make sure you don’t click **Start** multiple times (can create multiple intervals)
* This is handled in improved versions using interval checks

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
