const pressedKeys = new Set();
let lastCombo = "None";
let lastAscii = [];

document.addEventListener("keydown", (event) => {
    const key = normalizeKey(event.key);
    pressedKeys.add(key);

    lastCombo = getSortedCombo(pressedKeys).join(" + ");
    lastAscii = getAsciiValues(pressedKeys);

    updateUI();
});

document.addEventListener("keyup", (event) => {
    const key = normalizeKey(event.key);
    pressedKeys.delete(key);
});

function normalizeKey(key) {
    if (key === " ") return "Space";
    if (key === "Control") return "Ctrl";
    if (key === "Escape") return "Esc";
    return key.length === 1 ? key.toUpperCase() : key;
}

const order = ["Ctrl", "Shift", "Alt"];

function getSortedCombo(keys) {
    return [...keys].sort((a, b) => {
        const ia = order.indexOf(a);
        const ib = order.indexOf(b);
        if (ia !== -1 && ib !== -1) return ia - ib;
        if (ia !== -1) return -1;
        if (ib !== -1) return 1;
        return a.localeCompare(b);
    });
}

function getAsciiValues(keys) {
    return [...keys].map(key => {
        if (key.length === 1) {
            return `${key}: ${key.charCodeAt(0)}`;
        }
        return `${key}: N/A`;
    });
}

function updateUI() {
    document.getElementById("output").innerHTML = `
        <h2>Last Combo:</h2>
        <p>${lastCombo}</p>

        <h2>ASCII Values:</h2>
        <p>${lastAscii.join(" | ")}</p>
    `;
}