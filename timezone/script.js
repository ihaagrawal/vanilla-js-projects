document.getElementById("btn").addEventListener("click", displayTime);
async function displayTime() {
    const apiKey = "YOUR_API_KEY";

    const city = document.getElementById("city").value.trim();
    const contentDiv = document.querySelector(".content");

    if (!city) {
        contentDiv.innerHTML = "<h2>Please enter a city</h2>";
        return;
    }

    try {
        const res = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKey}`
        );

        const data = await res.json();

        if (!data.results.length) {
            contentDiv.innerHTML = "<h2>City not found</h2>";
            return;
        }

        const timezone = data.results[0].annotations.timezone.name;

        // Get current time in that timezone
        const time = new Intl.DateTimeFormat('en-IN', {
            timeZone: timezone,
            dateStyle: 'full',
            timeStyle: 'medium'
        }).format(new Date());

        // Update UI
        contentDiv.innerHTML = `
            <h2>${city}</h2>
            <p><strong>Timezone:</strong> ${timezone}</p>
            <p><strong>Current Time:</strong> ${time}</p>
        `;

    } catch (error) {
        contentDiv.innerHTML = "<h2>Error fetching data</h2>";
        console.error(error);
    }
}