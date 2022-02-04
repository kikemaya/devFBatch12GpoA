//INICIA EL HILO
//Pila el ultimo en llegar es el primero en salir
console.log('Sinc 1');
console.log('Sinc 2');
console.log('Sinc 3');
//TERMINA EL HILO


//INICIA EL HILO
//En las colas primero en entrar es el primero en salir
setTimeout(() => {
  console.log('Asinc 1');
}, 7000);
setTimeout(() => {
  console.log('Asinc 2');
}, 3000);
setTimeout(() => {
  console.log('Asinc 3');
}, 5000);
//TERMINA EL HILO

console.log('Extra 4');

//Cuello de botella 
console.log('Cuello de botella');
console.log('CB 1');
setTimeout(() => {
  return console.log('CB 2');
}, 3000);
setTimeout(() => {
  return console.log('CB 3');
}, 2000);
for (let index = 0; index < 9999999999; index++);
console.log('CB 4');
