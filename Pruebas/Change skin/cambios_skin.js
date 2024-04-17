function cambiarColor() {
  const body = document.querySelector("body");

  // Generar un color aleatorio en formato hexadecimal
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Aplicar el color de fondo al cuerpo de la página
  body.style.backgroundColor = color;
}
