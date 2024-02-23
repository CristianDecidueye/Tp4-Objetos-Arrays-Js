class Persona {
    constructor(nombreParam, edadParam, dniParam, sexoParam, pesoParam, alturaParam, anio_nacimientoParam) {
        this._nombre = nombreParam;
        this._edad = edadParam;
        this._dni = dniParam
        this._sexo = sexoParam;
        this._peso = pesoParam;
        this._altura = alturaParam;
        this._anio_nacimiento = anio_nacimientoParam;
    }

    mostrarGeneracion() {
        if (1994 <= this._anio_nacimiento && this._anio_nacimiento <= 2010) {
            console.log("Generación Z: Irreverencia");
        } else if (1981 <= this._anio_nacimiento && this._anio_nacimiento <= 1993) {
            console.log("Generación Y (Millennials): Frustración");
        } else if (1969 <= this._anio_nacimiento && this._anio_nacimiento <= 1980) {
            console.log("Generación X: Obsesión por el éxito");
        } else if (1949 <= this_.anio_nacimiento && this._anio_nacimiento <= 1968) {
            console.log("Generación Baby Boom: Ambición");
        } else if (1930 <= this._anio_nacimiento && this._anio_nacimiento <= 1948) {
            console.log("Silent Generation: Austeridad");
        } else {
            console.log("Generación no clasificada");
        }
    }
}

// Ejemplo:
const personaEjemplo = new Persona("Jose", 44, "1234567891", "H", 70, 1.80, 1980);
personaEjemplo.mostrarGeneracion();
console.log(personaEjemplo)

