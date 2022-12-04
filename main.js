document.addEventListener( 'DOMContentLoaded', function() {
    let links = document.getElementsByClassName("nav__link");
    Array.from(links).forEach((link) => {
        link.addEventListener('click', (clicked) => {
            Array.from(links).forEach((linkToRemove) => {
                linkToRemove.classList.remove('active');
            });
            clicked.currentTarget.classList.add('active');
        });
    });
    var splide = new Splide( '.splide', {
        type   : 'loop',
        interval: '7000',
        height   : 'auto',
        gap: '1rem',
        autoWidth: true,
    } );
    splide.mount();
    let modals = document.getElementsByClassName("hobbies__item");
    Array.from(modals).forEach((modal) => {
        modal.addEventListener('click', (clicked) => {
            Array.from(modals).forEach((modalToOpen) => {
                modalToOpen.classList.remove('opened');
            });
            clicked.currentTarget.classList.add('opened');
        });
    });
});
