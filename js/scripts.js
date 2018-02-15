//overlay-menu
const menuButton = document.querySelector('.mobile_menu');
const modalWrap = document.querySelector('.modal_menu');
const modalLink = document.querySelectorAll('.modal__link-menu');
const closeButton = document.querySelector('.close__btn');

menuButton.addEventListener('click', function (e) {
    modalWrap.style.display = 'block';
});
closeButton.addEventListener('click', function (e) {
    modalWrap.style.display = 'none';
});

for (let i = 0; i < modalLink.length; i++) {
    modalLink[i].addEventListener("click", function () {
        modalWrap.style.display = 'none';
    });
};

// acco-menu
var menuName = document.querySelectorAll(".menu-link");
var menuItem = document.querySelectorAll(".menu_elem");

for (let i = 0; i < menuName.length; i++) {
    menuName[i].addEventListener("click", function (e) {
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
    teamName[i].addEventListener("click", function (e) {
        e.preventDefault();

        for (let j = 0; j < teamItem.length; j++) {
            if (j !== i) {
                teamItem[j].classList.remove("active");
            };
        };

        this.closest('.team_elem').classList.toggle("active");
    });
};

// reviews popup

const revPopup = document.querySelector('.reviews_popup');
const revBtn = document.querySelectorAll ('.btn_reviews');
const revClose = document.querySelector('.close-reviews');

for ( r=0; r<revBtn.length; r++) {
    revBtn[r].addEventListener('click', function(){
        revPopup.style.display = 'flex';
        revClose.addEventListener('click', function(){
            revPopup.style.display = 'none';
        });
    });
}

// init onepagescroll

$(document).ready(function () {
    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 1000,
        menu: "#globalNav",
    });
});

// slick-slider

$(document).ready(function(){
    $('.slider__list').slick({
    });
  });