/*
 * SCHERMATA DI CARICAMENTO
 */

setTimeout(function () {
    const loading = document.getElementById("loading-screen");
    const menu = document.getElementById("menu");

    loading.style.display = "none";
    menu.style.opacity = "1";
    menu.style.transform = "translateY(0)";
}, 2200);


/*
 * CATEGORIE A TENDINA
 */

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    const button = category.querySelector(".category-header");

    button.addEventListener("click", () => {

        /*
         * Chiude le altre categorie
         */

        categories.forEach(otherCategory => {

            if (otherCategory !== category) {
                otherCategory.classList.remove("open");
            }

        });

        // Apre o chiude la categoria selezionata
        category.classList.toggle("open");

    });

});
