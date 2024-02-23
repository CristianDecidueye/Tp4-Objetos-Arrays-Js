/*  Ejercicios adicionales 9
Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/
// Definición de la clase base "Animal"
// Definición de la clase base "Animal"
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método común para ambos animales
    emitirSonido() {
        document.write("<p>Sonido genérico de un animal</p>");
    }
}

// Clase hija "Perro" que hereda de "Animal"
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        // Llamada al constructor de la clase padre
        super(nombre, edad);
        this.raza = raza;
    }

    // Método específico para perros
    emitirSonido() {
        document.write(`<p>${this.nombre} (Perro) dice: ¡Guau!</p>`);
    }
}

// Clase hija "Gato" que hereda de "Animal"
class Gato extends Animal {
    constructor(nombre, edad, color) {
        // Llamada al constructor de la clase padre
        super(nombre, edad);
        this.color = color;
    }

    // Método específico para gatos
    emitirSonido() {
        document.write(`<p>${this.nombre} (Gato) dice: ¡Miau!</p>`);
    }
}

// Crear objetos de las clases hijas
const perro1 = new Perro("Toby", 8, "Resctado");
const gato1 = new Gato("Milo", 1, "Gris y blanco");

// Llamar a los métodos emitirSonido para verificar que cada animal emite el sonido adecuado
perro1.emitirSonido();
gato1.emitirSonido();
