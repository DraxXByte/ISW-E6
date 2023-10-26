// Alternar entre pestañas
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("id") + "-section";

            // Eliminar la clase "active" de todas las secciones y enlaces
            sections.forEach(section => section.classList.remove("active"));
            navLinks.forEach(navLink => navLink.classList.remove("active"));

            // Agregar la clase "active" a la sección y enlace seleccionados
            document.getElementById(sectionId).classList.add("active");
            this.classList.add("active");
        });
    });

    // Calendario
    const calendario = document.getElementById("calendario");
    const mesActual = document.getElementById("mes");
    const anioActual = document.getElementById("anio");
    const fechaActual = new Date();
    const diasEnMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();
    const primerDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1).getDay();

    // Nombres de los meses
    const nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    mesActual.textContent = nombresMeses[fechaActual.getMonth()];
    anioActual.textContent = fechaActual.getFullYear();

    for (let i = 1; i <= diasEnMes; i++) {
        const dia = document.createElement("div");
        dia.textContent = i;
        if (i <= primerDia || [0, 1, 2].includes((primerDia + i - 1) % 7)) {
            dia.classList.add("cerrado");
        }
        calendario.appendChild(dia);
    }
});
