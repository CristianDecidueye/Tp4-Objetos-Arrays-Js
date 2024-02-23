// Definición del objeto Auto
const auto = {
  color: "blanco",
  marca: "peugeot",
  modelo: 208,
  estaEncendido: false,

  // Método para encender el auto
  encender: function () {
    if (!this.estaEncendido) {
      this.estaEncendido = true;
      document.write("El auto está encendido.<br>");
    } else {
      document.write("El auto ya está encendido.<br>");
    }
  },

  // Método para apagar el auto
  apagar: function () {
    if (this.estaEncendido) {
      this.estaEncendido = false;
      document.write("El auto está apagado.<br>");
    } else {
      document.write("El auto ya está apagado.<br>");
    }
  },
};

// Metodos
auto.encender(); // Resultado en pantalla: El auto está encendido.
auto.apagar(); // Resultado en pantalla: El auto está apagado.
auto.encender(); // Resultado en pantalla: El auto está encendido.
auto.apagar(); // Resultado en pantalla: El auto está apagado.

// Nota: Los puse en pantalla en vez de consola para que no haga falta que Jony ingrese a la consola.
