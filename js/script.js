// Toggle 
// Toggle adalah menu yang tidak bisa diadakan dan bisa diadakan 

const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger menu di klik

document.querySelector('#hamburger-menu'). 
onclick = () => {
    navbarNav.classList.toggle('active')
};

// ketika klik selain menu hamburger dan sidebar, maka sidebar akan menghilang

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains (e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    } 

});

