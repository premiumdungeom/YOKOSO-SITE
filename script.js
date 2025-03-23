// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Loading Spinner (for forms)
const form = document.getElementById('contact-form');
const spinner = document.getElementById('loading-spinner');

if (form) {
    form.addEventListener('submit', () => {
        spinner.style.display = 'block'; // Show spinner
    });
}

// Hide spinner after form submission (optional)
window.addEventListener('load', () => {
    if (spinner) spinner.style.display = 'none';
});
