// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});

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

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Submenu Toggle Function
function toggleSubmenu(menuId) {
    // Close all other submenus first
    document.querySelectorAll('.submenu').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
        }
    });
    
    // Toggle the selected submenu
    const menu = document.getElementById(menuId);
    menu.classList.toggle('active');
    
    // Close submenus when clicking outside
    document.addEventListener('click', function closeMenu(e) {
        if (!e.target.closest('.icon-nav-container')) {
            menu.classList.remove('active');
            document.removeEventListener('click', closeMenu);
        }
    });
}

// Close submenus when scrolling
window.addEventListener('scroll', () => {
    document.querySelectorAll('.submenu').forEach(menu => {
        menu.classList.remove('active');
    });
});
