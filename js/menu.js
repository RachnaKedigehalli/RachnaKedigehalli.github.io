var menu = document.getElementsByClassName('menu-button')[0];
menu.addEventListener('click', function(){
    console.log('clicked');
    document.getElementsByClassName('menu')[0].classList.add('show');
});
