document.addEventListener('DOMContentLoaded', function() {
    // Configura la próxima fecha aquí
    const proximaJunta = new Date('2023-12-15T18:00:00');
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Europe/Madrid'
    };
    
    document.getElementById('fecha').textContent = 
        proximaJunta.toLocaleDateString('es-ES', opciones);
});