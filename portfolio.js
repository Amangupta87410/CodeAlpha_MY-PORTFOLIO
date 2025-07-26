const navlist = document.getElementById('navlist');
const icons1 = document.getElementById('icons1');


icons1.addEventListener('click', () => {
    
    navlist.classList.toggle('navlist-active');
});



window.addEventListener('click', (event) => {
    
    const isMenuOpen = navlist.classList.contains('navlist-active');

   
    const isClickOnIcon = icons1.contains(event.target);
    
    
    const isClickInsideNav = navlist.contains(event.target);

    if (isMenuOpen && !isClickOnIcon && !isClickInsideNav) {
        navlist.classList.remove('navlist-active');
    }
});