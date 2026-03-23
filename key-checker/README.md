# ⌨️ Keyboard Key Checker

An interactive web app that detects and displays keyboard inputs in real-time, including **key combinations (combos)** and their corresponding **ASCII values**.

---

## 🚀 Features

* 🎯 Detects single and multiple key presses
* 🔗 Displays key combinations (e.g., `Ctrl + Shift + A`)
* 🧠 Tracks active keys using a `Set`
* 🛑 Prevents flickering by storing the **last combo**
* 🔢 Shows ASCII values for character keys
* ❌ Displays `N/A` for non-ASCII keys (Ctrl, Shift, etc.)
* ⚡ Real-time updates on key press

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```bash
Keyboard-Key-Checker/
│── index.html
│── style.css
│── script.js
```

---

## 📸 How It Works

1. Press any key on your keyboard
2. App detects and stores all currently pressed keys
3. Displays the **last key combination**
4. Shows ASCII values for valid keys
5. Combo remains visible even after keys are released

---

## 💡 Core Concepts Used

### 1. Event Listeners

* `keydown` → detect key press
* `keyup` → remove key from active set

### 2. Set Data Structure

* Stores unique active keys
* Efficient add/remove operations

### 3. Combo Tracking

* Keys are normalized and sorted
* Displayed in readable format (`Ctrl + Shift + A`)

### 4. ASCII Handling

```javascript
if (key.length === 1) {
    key.charCodeAt(0);
}
```

* Works only for character keys
* Special keys return `N/A`

---

## 🧪 Example Output

### Input:

Press `Ctrl + A`

### Output:

```
Last Combo:
Ctrl + A

ASCII Values:
Ctrl: N/A | A: 65
```

---

## ▶️ How to Run

1. Clone the repository or download the files
2. Open `index.html` in your browser
3. Start pressing keys 🎉

---

## ⚠️ Notes

* ASCII values are only available for:

  * Alphabets (A–Z, a–z)
  * Numbers (0–9)
  * Symbols (!, @, #, etc.)
* Special keys like `Ctrl`, `Shift`, `Arrow keys` do not have ASCII values
* Uses modern JavaScript (`event.key`) instead of deprecated methods

---

## 🌟 Future Improvements

* 📜 Show history of key combinations
* 🎮 Add shortcut detection (Ctrl+S, Ctrl+Z, etc.)
* 🎨 Improve UI with styled keyboard layout
* ⚡ Add real-time key highlighting
* 📊 Display `event.code` and `keyCode`

---

## 📌 Author

* **Iha Agrawal**
---

## ⭐ If you like this project

Give it a star ⭐ and feel free to contribute!
