const menuButton = document.querySelector('.mobile_menu');
const modalWrap = document.querySelector('.modal_menu')

menuButton.addEventListener('click', function(e){
    modalWrap.style.display = 'block';
});

const closeButton = document.querySelector('.close__btn');

closeButton.addEventListener('click', function(e){
    modalWrap.style.display = 'none';
});

const revButton = document.querySelector('a.btn_reviews');
const closeRev = document.querySelector('.close_reviews');

revButton.addEventListener('click', function(e){
    e.preventDefault();
})