async function cargarDatos() {
  try {
    const response = await fetch("datos.json");
    const datos = await response.json();

    const tbody = document.getElementById("tabla-puntajes");
    const tbodyClon = document.getElementById("tabla-puntajes-clon");
    tbody.innerHTML = "";
    tbodyClon.innerHTML = "";

    const datosOrdenados = datos.sort((a, b) => b.puntaje - a.puntaje);

    datosOrdenados.forEach((persona, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${persona.nombre}</td>
        <td>${persona.puntaje}</td>
      `;
      tbody.appendChild(fila);
      tbodyClon.appendChild(fila.cloneNode(true));
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarDatos);
