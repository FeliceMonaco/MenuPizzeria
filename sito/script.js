/* ==========================================
   SCHERMATA DI CARICAMENTO (Mostrata solo al primo accesso)
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const loading = document.getElementById("loading-screen");
    const mainContent = document.querySelector("main");
    const headerContent = document.querySelector("header");

    if (loading) {
        // Se l'utente ha già visto il caricamento in questa sessione
        if (sessionStorage.getItem("caricamentoMostrato")) {
            loading.style.display = "none";
            if (mainContent) mainContent.style.opacity = "1";
            if (headerContent) headerContent.style.opacity = "1";
        } else {
            // Primo accesso della sessione
            sessionStorage.setItem("caricamentoMostrato", "true");

            setTimeout(function () {
                loading.classList.add("hide");
                setTimeout(() => {
                    loading.style.display = "none";
                }, 1000); // Rimuove il div dopo la transizione CSS

                if (mainContent) mainContent.style.opacity = "1";
                if (headerContent) headerContent.style.opacity = "1";
            }, 3000);
        }
    }

    /* ==========================================
       CATEGORIE A TENDINA (Menu a scomparsa)
       ========================================== */

    const categories = document.querySelectorAll(".category");

    if (categories.length > 0) {
        categories.forEach(category => {
            const button = category.querySelector(".category-header");

            if (button) {
                button.addEventListener("click", () => {
                    // Chiude le altre categorie aperte
                    categories.forEach(otherCategory => {
                        if (otherCategory !== category) {
                            otherCategory.classList.remove("open");
                        }
                    });

                    // Apre o chiude la categoria cliccata
                    category.classList.toggle("open");
                });
            }
        });
    }
});