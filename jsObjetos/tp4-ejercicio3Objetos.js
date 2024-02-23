class Rectangulo {
    // Constructor para inicializar el alto y ancho
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Método para mostrar las propiedades del rectángulo
    mostrarPropiedades() {
      document.write(`Rectángulo - Alto: ${this.alto}, Ancho: ${this.ancho}<br>`);
    }
  
    // Método para modificar el alto y ancho
    modificarPropiedades(nuevoAlto, nuevoAncho) {
      this.alto = nuevoAlto;
      this.ancho = nuevoAncho;
      document.write('Propiedades modificadas.<br>');
    }
  
    // Método para calcular el perímetro del rectángulo
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    // Método para calcular el área del rectángulo
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  // Crear un objeto rectángulo
  const miRectangulo = new Rectangulo(10, 15);
  
  // Mostrar propiedades iniciales
  miRectangulo.mostrarPropiedades();
  
  // Modificar propiedades
  miRectangulo.modificarPropiedades(17, 20);
  
  // Mostrar propiedades después de la modificación
  miRectangulo.mostrarPropiedades();
  
  // Calcular y mostrar perímetro y área
  document.write(`Perímetro: ${miRectangulo.calcularPerimetro()}<br>`);
  document.write(`Área: ${miRectangulo.calcularArea()}<br>`);
  