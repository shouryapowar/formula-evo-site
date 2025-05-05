// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Driver standings data (would be from API in production)
    const drivers = [
        { name: "Alex Carter", age: 16, nationality: "UK", bestLap: "48.23s", consistency: "92%", status: "F4 Scouted" },
        { name: "Luca Moretti", age: 15, nationality: "IT", bestLap: "48.56s", consistency: "89%", status: "Progressing" },
        { name: "Emma Johansson", age: 16, nationality: "SE", bestLap: "48.78s", consistency: "87%", status: "Progressing" }
    ];

    // Populate driver standings if on drivers page
    if (document.getElementById('driver-table')) {
        const table = document.getElementById('driver-table');
        drivers.forEach(driver => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${driver.name}</td>
                <td>${driver.age}</td>
                <td>${driver.nationality}</td>
                <td>${driver.bestLap}</td>
                <td>${driver.consistency}</td>
                <td><span class="status-badge ${driver.status.toLowerCase().replace(' ', '-')}">${driver.status}</span></td>
            `;
            table.appendChild(row);
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
});