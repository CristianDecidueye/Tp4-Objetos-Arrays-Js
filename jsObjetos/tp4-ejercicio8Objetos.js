/* Ejercicios adicionales :
Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse". */
class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    document.write(
      `<p>Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.</p>`
    );
  }

  despedirse() {
    document.write(`<p>Un gusto. Hasta luego.</p>`);
  }
}

// Crear dos objetos de la clase Persona
const persona1 = new Persona("Cristian", 25, "Estudiante de Rolling Code School");
const persona2 = new Persona("Jony", 30, "Mentor de Rolling Code School");

// Llamar a los métodos de saludar y despedirse para cada persona
persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();
