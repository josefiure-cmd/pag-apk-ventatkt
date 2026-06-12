document.addEventListener('DOMContentLoaded', () => {
    
    // --- EFECTO DE SEGUIMIENTO DE MOUSE PREMIUM (GLOW) ---
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // --- BUSCADOR EN TIEMPO REAL ---
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector('.app-info h3').textContent.toLowerCase();
            const dev = card.querySelector('.developer').textContent.toLowerCase();
            const desc = card.querySelector('.description').textContent.toLowerCase();

            if (title.includes(searchText) || dev.includes(searchText) || desc.includes(searchText)) {
                card.style.display = 'flex';
                card.style.animate = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // --- PROCESADOR DE DESCARGAS PREMIUM (MODAL COMODO) ---
    const downloadButtons = document.querySelectorAll('.download-btn');
    const modal = document.getElementById('download-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalStatus = document.getElementById('modal-status');

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const appName = button.getAttribute('data-app');
            
            // Abrir modal e iniciar secuencia estética de carga
            modal.style.display = 'flex';
            modalTitle.textContent = `Analizando ${appName}`;
            modalStatus.textContent = "Verificando firmas digitales y buscando malware...";

            setTimeout(() => {
                modalTitle.textContent = "Generando enlace seguro";
                modalStatus.textContent = "Asignando servidor de alta velocidad dedicado...";
            }, 1500);

            setTimeout(() => {
                modalTitle.textContent = "¡Descarga Lista!";
                modalStatus.textContent = "El archivo APK se está transfiriendo a tu dispositivo.";
                
                // Aquí puedes agregar la línea real de descarga si lo requieres en el futuro:
                // window.location.href = "enlace_de_tu_apk.apk";
            }, 3200);

            // Cerrar automáticamente el modal después de terminar la simulación
            setTimeout(() => {
                modal.style.display = 'none';
            }, 5500);
        });
    });

    // Cerrar modal al hacer clic fuera del cuadro
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
