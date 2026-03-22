# 🧮 BMI Calculator

A simple and interactive Body Mass Index (BMI) Calculator built using **HTML, CSS, and JavaScript**.
It allows users to input their weight and height and instantly calculates their BMI along with the corresponding health category.

---

## 🚀 Features

* User-friendly interface
* Real-time BMI calculation
* Displays BMI value up to 2 decimal places
* Categorizes BMI into:

  * Underweight
  * Normal
  * Overweight
  * Obese
* Clean and minimal UI

---

## 📂 Project Structure

```
BMI-Calculator/
│── index.html
│── style.css
│── script.js
```

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the webpage
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Logic and interactivity

---

## 📖 How It Works

1. User enters:

   * Weight (in kilograms)
   * Height (in centimeters)

2. BMI is calculated using the formula:

```
BMI = weight / (height in meters)^2
```

3. Based on the BMI value, the category is determined:

   * **< 18.5** → Underweight
   * **18.5 – 24.9** → Normal
   * **25 – 29.9** → Overweight
   * **30+** → Obese

4. Result is displayed dynamically on the page.

---

## ▶️ How to Run

1. Clone or download the repository
2. Open `index.html` in your browser
3. Enter your details and click **Calculate BMI**

---

## 💡 Example

```
Input:
Weight: 60 kg
Height: 170 cm

Output:
BMI: 20.76
Category: Normal
```

---

## 🔧 Possible Improvements

* Add input validation (empty/invalid values)
* Add BMI chart or visual indicator
* Make it responsive for mobile devices
* Store history of calculations
* Add unit conversion (lbs/inches)

---

## 📌 Author

**Iha Agrawal**

---

## 📄 License

This project is open-source and free to use.
