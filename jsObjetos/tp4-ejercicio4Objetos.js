// Definición de la clase Producto.
class Producto {
  // Constructor para inicializar código, nombre y precio
  constructor(codigoParam, nombreParam, precioParam) {
    this._codigo = codigoParam;
    this._nombre = nombreParam;
    this._precio = precioParam;
  }

  // Método para imprimir datos del producto
  imprimeDatos() {
    document.write(
      `Código: ${this._codigo}, Nombre: ${this._nombre}, Precio: $${this._precio}<br>`
    );
  }
}

// Crear instancias de la clase Producto
const producto1 = new Producto(1, "Producto A", 1499.99);
const producto2 = new Producto(2, "Producto B", 1299.99);
const producto3 = new Producto(3, "Producto C", 1199.99);

// Almacenar las instancias en un array
const arrayProductos = [producto1, producto2, producto3];

// Utilizar el método imprimeDatos para mostrar los valores
for (const producto of arrayProductos) {
  producto.imprimeDatos();
}
