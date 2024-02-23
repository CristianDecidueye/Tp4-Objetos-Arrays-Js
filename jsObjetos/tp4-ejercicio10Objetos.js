/* Ejercicios adicionales 10
crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/
class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaDeAviones = [];
    }

    agregarAvion(avion) {
        this.listaDeAviones.push(avion);
    }

    buscarAvion(nombreAvion) {
        const avionEncontrado = this.listaDeAviones.find(avion => avion.nombre === nombreAvion);
        if (avionEncontrado) {
            document.write(`<p>Información del avión ${avionEncontrado.nombre}: Capacidad: ${avionEncontrado.capacidad}, Destino: ${avionEncontrado.destino}</p>`);
        } else {
            document.write(`<p>No se encontró ningún avión con el nombre ${nombreAvion}.</p>`);
        }
    }
}

class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaDePasajeros = [];
    }

    abordar(pasajero) {
        if (this.listaDePasajeros.length < this.capacidad) {
            this.listaDePasajeros.push(pasajero);
            document.write(`<p>Pasajero ${pasajero} abordado en el avión ${this.nombre}.</p>`);
        } else {
            document.write(`<p>El avión ${this.nombre} está lleno. No hay capacidad disponible.</p>`);
        }
    }
}

// Crear un objeto de tipo Aeropuerto
const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

// Crear 3 objetos de tipo Avion con diferentes destinos
const avion1 = new Avion("Fly Emirates", 250, "Nueva York");
const avion2 = new Avion("Aerolineas Argentinas", 200, "Tucuman,tristemente");
const avion3 = new Avion("Fly Bondi", 100, "Londres");

// Agregar los 3 aviones al aeropuerto
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

// Buscar un avión
const nombreAvionABuscar = "Aerolineas Argentinas";
aeropuertoInternacional.buscarAvion(nombreAvionABuscar);

// Usar el método abordar en un avión
avion2.abordar("Cristian Diaz");
