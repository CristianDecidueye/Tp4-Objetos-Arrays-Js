// Arrays donde se almacenaran productos y precios
const productosEnStock = ["Producto1", "Producto2", "Producto3"];
const preciosProductos = [10, 20, 30];

// funcion que agregará un producto nuevo al inventario
function agregarProducto(nombre, precio) {
  productosEnStock.push(nombre);
  preciosProductos.push(precio);
  document.write(`Producto "${nombre}" agregado al inventario.`);
}

// Función para eliminar productos agotados del inventario
function eliminarProductosAgotados() {
  let productosAgotados = [];
  for (let i = 0; i < productosEnStock.length; i++) {
    if (preciosProductos[i] <= 0) {
      productosAgotados.push(productosEnStock[i]);
      productosEnStock.splice(i, 1);
      preciosProductos.splice(i, 1);
      i--; // Ajustar el índice después de la eliminación
    }
  }
  if (productosAgotados.length > 0) {
    console.log(
      `Productos agotados eliminados: ${productosAgotados.join(", ")}.`
    );
  } else {
    console.log("No hay productos agotados para eliminar.");
  }
}
// Función para calcular el valor total del inventario
function calcularValorTotalInventario() {
  let valorTotal = 0;
  for (let i = 0; i < preciosProductos.length; i++) {
    valorTotal += preciosProductos[i];
  }
  console.log(`El valor total del inventario es: $${valorTotal}.`);
}

// Ejemplo
agregarProducto("Aceite", 50);
agregarProducto("Queso", 0);
eliminarProductosAgotados();
calcularValorTotalInventario();
