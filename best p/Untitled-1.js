// app.js
document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
        { name: "Paris", image: "paris.jpg", description: "The city of love and lights.", link: "paris.html" },
        { name: "Tokyo", image: "tokyo.jpg", description: "A blend of tradition and technology.", link: "tokyo.html" },
        { name: "New York", image: "newyork.jpg", description: "The city that never sleeps.", link: "newyork.html" }
    ];

    const destinationContainer = document.getElementById("destination-cards");
    
    destinations.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("destination-card");
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
            <a href="${dest.link}" class="btn">Learn More</a>
        `;
        destinationContainer.appendChild(card);
    });

    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    });
});
