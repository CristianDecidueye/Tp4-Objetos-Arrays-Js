class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.tamano = tamano;
    this.contactos = [];
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      document.write(
        "No se pueden añadir más contactos. La agenda está llena.<br>"
      );
    } else if (this.existeContacto(contacto)) {
      document.write("El contacto ya existe en la agenda.<br>");
    } else {
      this.contactos.push(contacto);
      document.write("Contacto añadido correctamente.<br>");
    }
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.nombre === contacto.nombre);
  }

  listarContactos() {
    document.write("<p>Lista de contactos:</p>");
    this.contactos.forEach((c) =>
      document.write(`<p>${c.nombre}: ${c.telefono}</p>`)
    );
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find((c) => c.nombre === nombre);
    if (contactoEncontrado) {
      document.write(
        `<p>Teléfono de ${nombre}: ${contactoEncontrado.telefono}</p>`
      );
    } else {
      document.write(
        `<p>No se encontró ningún contacto con el nombre ${nombre}.</p>`
      );
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex(
      (c) => c.nombre === contacto.nombre
    );
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      document.write("Contacto eliminado correctamente.<br>");
    } else {
      document.write("No se encontró ningún contacto para eliminar.<br>");
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}

// Función principal para interactuar con el usuario mediante un menú
function ejecutarMenu() {
  const agenda = new Agenda();

  while (true) {
    const opcion = prompt(`
        Menú:
        1. Añadir contacto
        2. Buscar contacto
        3. Eliminar contacto
        4. Listar contactos
        5. Huecos libres
        6. Salir

        Ingrese el número de la opción deseada:`);

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;

      case "2":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;

      case "3":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        const contactoEliminar = new Contacto(nombreEliminar, "");
        agenda.eliminarContacto(contactoEliminar);
        break;

      case "4":
        agenda.listarContactos();
        break;

      case "5":
        document.write(
          `<p>Huecos libres en la agenda: ${agenda.huecosLibres()}</p>`
        );
        break;

      case "6":
        return;

      default:
        document.write(
          "<p>Opción no válida. Por favor, ingrese un número del 1 al 6.</p>"
        );
    }
  }
}

// Llamamos a la función principal para ejecutar el menú
ejecutarMenu();
