// Objeto para representar el catálogo de la biblioteca
const biblioteca = {
    catalogoLibros: [
      { titulo: 'El lado B del amor - Rolon', disponible: true },
      { titulo: 'Historias de un divan - Rolon', disponible: true },
      { titulo: 'El duelo - Rolon', disponible: false },
    ],
  
    // Función para buscar un libro por título
    buscarLibroPorTitulo: function(titulo) {
      const libroEncontrado = this.catalogoLibros.find(libro => libro.titulo === titulo);
  
      if (libroEncontrado) {
        document.write(`El libro "${titulo}" está en el catálogo.<br>`);
      } else {
        document.write(`El libro "${titulo}" no se encuentra en el catálogo.<br>`);
      }
    },
  
    // Función para verificar la disponibilidad de un libro específico
    verificarDisponibilidad: function(titulo) {
      const libroEncontrado = this.catalogoLibros.find(libro => libro.titulo === titulo);
  
      if (libroEncontrado) {
        if (libroEncontrado.disponible) {
          document.write(`El libro "${titulo}" está disponible para prestarlo.<br>`);
        } else {
          document.write(`El libro "${titulo}" no está disponible para prestarlo.<br>`);
        }
      } else {
        document.write(`El libro "${titulo}" no se encuentra en el catálogo.<br>`);
      }
    },
  
    // Función para llevar un registro de la disponibilidad de los libros
    mostrarEstadoDeLibros: function() {
      document.write('<strong>Estado de los libros en el catálogo:</strong><br>');
      this.catalogoLibros.forEach(libro => {
        const estado = libro.disponible ? 'Disponible' : 'No disponible';
        document.write(`${libro.titulo} - ${estado}<br>`);
      });
    },
  };
  
  // Ejemplo de uso
  biblioteca.buscarLibroPorTitulo('El Duelo - Rolon');
  biblioteca.verificarDisponibilidad('Historias de un divan - Rolon');
  biblioteca.mostrarEstadoDeLibros();