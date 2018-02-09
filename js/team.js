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