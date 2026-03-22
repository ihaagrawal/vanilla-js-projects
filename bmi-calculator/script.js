function calculatebmi() {
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);

    const bmi = weight / ((height / 100) ** 2);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    <p>Your BMI: <strong>${bmi.toFixed(2)}</strong></p>
    <p>Category: <strong>${category}</strong></p>
    `;
}