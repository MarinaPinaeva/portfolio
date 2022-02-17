const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.sidepanel').addClass('active');
        $('.sidepanel__divider').addClass('active');
        $('#facebook').addClass('active');
        $('#instagram').addClass('active');
        $('#github').addClass('active');
    }

    if ($(this).scrollTop() < 400) {
        $('.sidepanel').removeClass('active');
        $('.sidepanel__divider').removeClass('active');
        $('#facebook').removeClass('active');
        $('#instagram').removeClass('active');
        $('#github').removeClass('active');
    }
    
});

const counters = document.querySelectorAll('.skills__progress-counter'),
        lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});