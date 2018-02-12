const menuButton = document.querySelector('.mobile_menu');
const modalWrap = document.querySelector('.modal_menu')

menuButton.addEventListener('click', function(e){
    modalWrap.style.display = 'block';
});

const closeButton = document.querySelector('.close__btn');

closeButton.addEventListener('click', function(e){
    modalWrap.style.display = 'none';
});

$(document).ready(function() {
	$('#fullpage').fullpage({
        css3: true,
		scrollingSpeed: 1000,
    });
});

