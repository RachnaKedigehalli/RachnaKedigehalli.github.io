var menu = document.getElementsByClassName('menu-button')[0];
menu.addEventListener('click', function(){
    document.getElementsByClassName('menu')[0].classList.add('show');    
});

var cross = document.getElementsByClassName('cross')[0];
cross.addEventListener('click', function(){
    document.getElementsByClassName('menu')[0].setAttribute('style', 'animation-name: slide-out;');
    setTimeout(function(){
        document.getElementsByClassName('menu')[0].classList.remove('show');
        document.getElementsByClassName('menu')[0].setAttribute('style', 'animation-name: slide-in;');
    }, 400);
    
});