'use strict'

const request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText)
    console.log(data);
})



Crear una funcion que multiplique dos numeros, sin usar el simbolo *


