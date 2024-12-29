const mobileNav = document.getElementById('mobile-nav');
const mobileMenu = document.getElementById('mobilemenu');
const mobileLinks = document.querySelectorAll('.mobilelinks ul li a');
let navopened = false
mobileNav.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
    if (!navopened) {
        mobileMenu.style.display = 'block'
        navopened = true;
    }
    else {
        mobileMenu.style.display = 'none';
        navopened = false;
    }
})

mobileLinks.forEach((link) => {
    link.addEventListener('click', function () {
        mobileMenu.style.display = 'none';
        navopened = false;
        mobileNav.classList.toggle('open');


    })
})