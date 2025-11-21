function verProyecto(id) {
    const mensajes = {
        1: "📘 Sistema Web Académico: Gestión escolar completa con panel administrador.",
        2: "📦 Inventario y Ventas: Control de productos, ventas y reportes automáticos.",
        3: "🛡️ IA IDS: Detección de intrusos usando Machine Learning."
    };

    // Efecto modal tipo alerta futurista
    const modal = document.createElement("div");
    modal.className = "modal glass";
    modal.innerHTML = `
        <div class="modal-content">
            <p>${mensajes[id]}</p>
            <button onclick="this.parentElement.parentElement.remove()">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

