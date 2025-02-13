document.addEventListener("DOMContentLoaded", function() {
    // Función para buscar en todo el contenido de la página
    function searchContent() {
        const searchText = document.getElementById("searchInput").value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const cardContent = card.textContent.toLowerCase(); // Texto de la tarjeta
            const contentId = card.getAttribute("data-target");
            const content = document.getElementById(contentId);

            // Buscar en el contenido de la tarjeta y en el contenido desplegable
            const contentText = content ? content.textContent.toLowerCase() : "";

            if (cardContent.includes(searchText) || contentText.includes(searchText)) {
                card.style.display = "inline-block"; // Mostrar tarjeta si coincide
                if (content) content.style.display = "block"; // Mostrar contenido si coincide
            } else {
                card.style.display = "none"; // Ocultar tarjeta si no coincide
                if (content) content.style.display = "none"; // Ocultar contenido si no coincide
            }
        });
    }

    // Evento para el buscador
    document.getElementById("searchInput").addEventListener("input", searchContent);

    // Eventos para las tarjetas (sin cambios)
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function() {
            const contentId = this.getAttribute("data-target");
            toggleContent(contentId);
        });
    });
});

function toggleContent(id) {
    const content = document.getElementById(id);
    const isHidden = content.style.display === "none" || content.style.display === "";
    content.style.display = isHidden ? "block" : "none";
}