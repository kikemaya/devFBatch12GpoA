let numero = 0;
function saludar() {
  numero++;
  console.log('Jajaja ', numero);
  if (numero < 10) {
    saludar();
  }
}

saludar();