// Arrays para nombres y estados de proyectos
const proyectos = [];
const estadosProyectos = [];

// Función para agregar un nuevo proyecto
function agregarProyecto(nombre, estado = 'En curso') {
    proyectos.push(nombre);
    estadosProyectos.push(estado);
    document.write(`Proyecto "${nombre}" agregado con estado "${estado}".<br>`);
}

// Función para cambiar el estado de un proyecto
function cambiarEstadoProyecto(nombre, nuevoEstado) {
    const indice = proyectos.indexOf(nombre);
    if (indice !== -1) {
        estadosProyectos[indice] = nuevoEstado;
        document.write(`Estado del proyecto "${nombre}" cambiado a "${nuevoEstado}".<br>`);
    } else {
        document.write(`El proyecto "${nombre}" no se encuentra en la lista.<br>`);
    }
}

// Función para asignar un responsable a un proyecto
function asignarResponsable(nombre, responsable) {
    const indice = proyectos.indexOf(nombre);
    if (indice !== -1) {
        document.write(`Responsable "${responsable}" asignado al proyecto "${nombre}".<br>`);
    } else {
        document.write(`El proyecto "${nombre}" no se encuentra en la lista.<br>`);
    }
}

// Función para generar un resumen de proyectos en curso
function resumenProyectosEnCurso() {
    document.write('<strong>Proyectos en curso:</strong><br>');
    for (let i = 0; i < proyectos.length; i++) {
        if (estadosProyectos[i] === 'En curso') {
            document.write(`${proyectos[i]} - Estado: ${estadosProyectos[i]}<br>`);
        }
    }
}

// Ejemplo de uso
agregarProyecto('Proyecto1');
agregarProyecto('Proyecto2', 'Completado');
cambiarEstadoProyecto('Proyecto1', 'En revisión');
asignarResponsable('Proyecto2', 'Cristian Diaz');
resumenProyectosEnCurso();
