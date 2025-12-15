




// function downloadCv() {
//     base_url = 'https://drive.google.com/file/d/1oU78Yn-GnHRrhSxGqLtEdsEwg8KwYebH/view?usp=sharing'
//     window.open(base_url, '_blank')
// }



function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');

    body.classList.toggle('light-theme');

    // Update icon and save preference
    if (body.classList.contains('light-theme')) {
        themeIcon.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.textContent = 'Dark';
    }
});

window.addEventListener('load', function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Frontend Developer', 'Problem Solver', 'Quick Learner'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });
});


function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
