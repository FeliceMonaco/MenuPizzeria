/*
 * SCHERMATA DI CARICAMENTO (Mostrata SOLO al primo accesso)
 */

document.addEventListener("DOMContentLoaded", function () {
    const loading = document.getElementById("loading-screen");
    const menu = document.getElementById("menu");

    if (loading && menu) {
        // Controlla se l'utente ha già visto il caricamento in questa sessione
        if (sessionStorage.getItem("caricamentoMostrato")) {
            // Se lo ha già visto: nasconde subito il loader e mostra il menu all'istante
            loading.style.display = "none";
            menu.style.opacity = "1";
            menu.style.transform = "translateY(0)";
            menu.style.transition = "none"; // Evita l'animazione di entrata nei cambi pagina
        } else {
            // È la prima volta che entra: salva il flag in sessionStorage
            sessionStorage.setItem("caricamentoMostrato", "true");

            // Avvia il timer di 2.6 secondi
            setTimeout(function () {
                loading.style.display = "none";
                menu.style.opacity = "1";
                menu.style.transform = "translateY(0)";
            }, 2600);
        }
    }
});


/*
 * CATEGORIE A TENDINA
 */

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    const button = category.querySelector(".category-header");

    if (button) {
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
    }

});