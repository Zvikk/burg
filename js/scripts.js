//overlay-menu
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
menu: "#globalNav",
});
});

// acco-menu
var menuName = document.querySelectorAll(".menu-link");
var menuItem = document.querySelectorAll(".menu_elem");

for (let i = 0; i < menuName.length; i++) {
    menuName[i].addEventListener("click", function(e) {
        e.preventDefault();

        for (let j = 0; j < menuItem.length; j++) {
            if (j !== i) {
                menuItem[j].classList.remove("active");
            };
        };

        this.closest('.menu_elem').classList.toggle("active");
    });
};

//team-menu

var teamName = document.querySelectorAll(".team__btn");
var teamItem = document.querySelectorAll(".team_elem");

for (let i = 0; i < teamName.length; i++) {
    teamName[i].addEventListener("click", function(e) {
        e.preventDefault();

        for (let j = 0; j < teamItem.length; j++) {
            if (j !== i) {
                teamItem[j].classList.remove("active");
            };
        };

        this.closest('.team_elem').classList.toggle("active");
    });
};
