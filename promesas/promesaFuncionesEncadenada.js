'use strict'

const promesa = new Promise((resolve, reject) => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);

  setTimeout(() => {
    (number1 && number2) > 2
    ? resolve({ number1: number1, number2: number2 })
    : reject(new Error('Alguno de los numeros es menor a 2'));
  }, 5000);
});

function suma(num1, num2) {
  return num1 + num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

promesa
.then(numbers => {
  console.log('number ', numbers);
  return suma(numbers.number1, numbers.number2);
})
.then(suma => {
  console.log('suma ', suma);
  return mult(suma, 10)
})
.then(numRandomFinal => {
  console.log('numRandomFinal ', numRandomFinal);
})
.catch(error => {
  console.log('error ', error);
  return {
    status: 500,
    error: error
  }
})

