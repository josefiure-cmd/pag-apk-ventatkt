document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE ALERTA DE DESCARGA ---
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que recargue la página
            
            // Obtener el nombre de la app guardado en el atributo HTML data-app
            const appName = button.getAttribute('data-app');
            
            alert(`📥 Conectando al servidor... La descarga de "${appName}" comenzará automáticamente.`);
        });
    });

    // --- LÓGICA DEL BUSCADOR EN TIEMPO REAL ---
    const searchInput = document.getElementById('search-input');
    const appCards = document.querySelectorAll('.app-card');

    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase().trim();

        appCards.forEach(card => {
            const appTitle = card.querySelector('.app-info h3').textContent.toLowerCase();
            const appDeveloper = card.querySelector('.app-info p').textContent.toLowerCase();

            // Si el título o el desarrollador incluyen lo que escribió el usuario, se muestra; si no, se oculta
            if (appTitle.includes(searchText) || appDeveloper.includes(searchText)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
