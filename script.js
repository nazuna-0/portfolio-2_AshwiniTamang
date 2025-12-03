
// --- MOBILE MENU ---
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    // Change icon
    if (navLinks.classList.contains('open')) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    }
});


// --- FORM HANDLING ---
const form = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === "" || email === "") {
        alert("Please fill in both Name and Email!");
        messageDiv.textContent = "Please fill out all fields.";
        messageDiv.style.color = "red";
        return; 
    }

    // Success case
    messageDiv.textContent = "Thenkyu! I'll reach out soon";
    messageDiv.style.color = "lightgreen";
    form.reset();
});