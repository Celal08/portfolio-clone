document.addEventListener('DOMContentLoaded', function() {
    var menuBar = document.querySelector('#menu_bar');
    var menuLink = document.querySelector('#menu_link');

    menuLink.style.top = '-450px';

    menuBar.onclick = function() {
        if (menuLink.style.top === '-450px') {
            menuLink.style.top = '70px'; // Bu değeri düzelten bir değerle değiştirdim
        } else {
            menuLink.style.top = '-450px';
        }
    };
});