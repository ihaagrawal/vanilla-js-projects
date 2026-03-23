const startbutton = document.getElementById("start").addEventListener("click", changeColors);
const stopbutton = document.getElementById("stop").addEventListener("click", stopColors);
let changingColors = null;

function changeColors(event) {
    changingColors = setInterval(() => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        console.log(`rgb(${r}, ${g}, ${b})`);
    }, 1000);
}

function stopColors(event) {
    clearInterval(changingColors);
    document.body.style.backgroundColor = "white";
    changingColors = null;
}