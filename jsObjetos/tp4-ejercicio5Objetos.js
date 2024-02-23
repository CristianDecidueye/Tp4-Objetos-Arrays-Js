class Persona {
    constructor(nombreParam, edadParam, dniParam, sexoParam, pesoParam, alturaParam, anio_nacimientoParam) {
        this._nombre = nombreParam;
        this._edad = edadParam;
        this._dni = dniParam || this.generaDNI();
        this._sexo = sexoParam;
        this._peso = pesoParam;
        this._altura = alturaParam;
        this._anio_nacimiento = anio_nacimientoParam;
    }Param

    esMayorDeEdad() {
        return this._edad >= 18;_
    }

    mostrarDatos() {
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Edad: ${this._edad} años`);
        console.log(`DNI: ${this._dni}`);
        console.log(`Sexo: ${this._sexo}`);
        console.log(`Peso: ${this._peso} kg`);
        console.log(`Altura: ${this._altura} m`);
        console.log(`Año de nacimiento: ${this._anio_nacimiento}`);
    }

    generaDNI() {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }

    mostrarGeneracion() {
        if (1994 <= this._anio_nacimiento && this._anio_nacimiento <= 2010) {
            console.log("Generación Z: Irreverencia");
        } else if (1981 <= this._anio_nacimiento && this._anio_nacimiento <= 1993) {
            console.log("Generación Y (Millennials): Frustración");
        } else if (1969 <= this._anio_nacimiento && this._anio_nacimiento <= 1980) {
            console.log("Generación X: Obsesión por el éxito");
        } else if (1949 <= this._anio_nacimiento && this._anio_nacimiento <= 1968) {
            console.log("Generación Baby Boom: Ambición");
        } else if (1930 <= this._anio_nacimiento && this._anio_nacimiento <= 1948) {
            console.log("Silent Generation: Austeridad");
        } else {
            console.log("Generación no clasificada");
        }
    }_
}

// Ejemplo
let personaEjemplo = new Persona("Jose", 44, "131234124", "H", 70, 1.75, 1980);
console.log(`Es mayor de edad: ${personaEjemplo.esMayorDeEdad()}`);
personaEjemplo.mostrarDatos();
personaEjemplo.mostrarGeneracion();

// Se muestra en consola el resultado.
