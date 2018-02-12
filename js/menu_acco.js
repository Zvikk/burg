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