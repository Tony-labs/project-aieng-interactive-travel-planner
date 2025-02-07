// This script can be used to add interactivity,
// such as smooth scrolling to sections or any other functionality.

// Smooth scrolling to section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
