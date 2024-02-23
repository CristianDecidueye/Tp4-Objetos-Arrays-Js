// Definición del objeto cuenta
const cuenta = {
  titular: "Alex",
  saldo: 0,

  // Método para ingresar dinero a la cuenta
  ingresar: function (cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      document.write(
        `Se han ingresado $${cantidad} pesos. Saldo actual: ${this.saldo} unidades.<br>`
      );
    } else {
      document.write("La cantidad ingresada debe ser mayor que 0.<br>");
    }
  },

  // Método para extraer dinero de la cuenta
  extraer: function (cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      document.write(
        `Se han extraído ${cantidad} unidades. Saldo actual: ${this.saldo} unidades.<br>`
      );
    } else {
      document.write(
        "La cantidad a extraer debe ser mayor que 0 y no puede superar el saldo disponible.<br>"
      );
    }
  },

  // Método para informar el estado de la cuenta
  informar: function () {
    document.write(
      `Titular: ${this.titular}, Saldo actual: ${this.saldo} unidades.<br>`
    );
  },
};

// Mostrar información inicial
cuenta.informar();

// Ingresar dinero
cuenta.ingresar(500);

// Extraer dinero
cuenta.extraer(300);

// Mostrar información después de las operaciones
cuenta.informar();
