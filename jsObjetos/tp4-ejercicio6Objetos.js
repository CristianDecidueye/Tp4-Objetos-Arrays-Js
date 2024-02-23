class Libro {
  constructor(ISBNParam, tituloParam, autorParam, numPaginasParam) {
    this._ISBN = ISBNParam;
    this._titulo = tituloParam;
    this._autor = autorParam;
    this._numPaginas = numPaginasParam;
  }

  // Métodos get y set para ISBN
  get ISBN() {
    return this._ISBN;
  }

  set ISBN(nuevoISBN) {
    this._ISBN = nuevoISBN;
  }

  // Métodos get y set para Título
  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  // Métodos get y set para Autor
  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }

  // Métodos get y set para Número de Páginas
  get numPaginas() {
    return this._numPaginas;
  }

  set numPaginas(nuevoNumPaginas) {
    this._numPaginas = nuevoNumPaginas;
  }

  // Método para mostrar la información del libro
  mostrarLibro() {
    document.write(
      `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.<br>`
    );
  }
}

// Crear objetos Libro
const libro1 = new Libro("978-0-306-40615-7", "Caperucita Roja", "Autor1", 32);
const libro2 = new Libro("978-1-491-90384-6", "Shrek", "Autor2", 45);

// Mostrar información de los libros
libro1.mostrarLibro();
libro2.mostrarLibro();

// Comparar cuál libro tiene más páginas
if (libro1.numPaginas > libro2.numPaginas) {
  document.write(
    `${libro1.titulo} tiene más páginas que ${libro2.titulo}.<br>`
  );
} else if (libro1.numPaginas < libro2.numPaginas) {
  document.write(
    `${libro2.titulo} tiene más páginas que ${libro1.titulo}.<br>`
  );
} else {
  document.write("Ambos libros tienen la misma cantidad de páginas.<br>");
}
