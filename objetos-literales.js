const persona = {
    "nombre completo" : "Cecilia",
    "x1" : "uno",
    "x2" : "dos",
}

let x = 1

console.log(persona);
console.log(persona["nombre completo"]);
console.log(persona["x" + x]);
x++
console.log(persona["x" + x]);

for (const key in persona) {
    console.log(key);
}