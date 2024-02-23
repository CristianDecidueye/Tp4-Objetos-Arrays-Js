// Arrays con nombres de estudiantes y sus notas
const estudiantes = ['Emilse', 'Jony', 'Cristian'];
const notas = [9, 5, 5]; // Las notas deben estar en el mismo orden que los estudiantes

// Función para calcular el promedio de notas por estudiante
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}
// Función para mostrar un resumen con estudiantes que aprobaron y reprobaron
function mostrarResumenEnPantalla() {
    for (let i = 0; i < estudiantes.length; i++) {
        const promedio = calcularPromedio([notas[i]]);
        if (promedio >= 6) {
            document.write(`${estudiantes[i]} aprobó con un promedio de ${promedio} <br>`);
        } else {
            document.write(`${estudiantes[i]} reprobó con un promedio de ${promedio} <br>`);
        }
    }
}

mostrarResumenEnPantalla()