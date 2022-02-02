'use strict'

module.exports = {
  usuariosSinc(id) {
    const tiempoInicio = new Date().getTime();
    while (new Date().getTime() - tiempoInicio <= 3000) {
      //Esperando...
    }

    return {
      'id': id,
      'nombre': `Usuario ${id}`
    };
  },
  usuariosAsinc(id, callback) {
    const usuario = {
      id: id,
      nombre: `Usuario ${id}`
    };

    setTimeout(() => {
      callback(usuario)
    }, 3000);
  }
};
