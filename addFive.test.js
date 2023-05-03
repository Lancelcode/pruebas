const { default: TestRunner } = require('jest-runner');//<---
const addFive = require('./addFive');
const { default: expect } = require('expect');

test('return the value plus 5', () => {
    expect(addFive(1)).toBe(6);
})

/*Este código es un ejemplo de una prueba unitaria escrita en Jest, un marco de pruebas de JavaScript.
 linea 1 de codigo
 La primera línea importa el módulo `jest-runner` y lo asigna a la variable `TestRunner`.
 Sin embargo, esta línea no es necesaria para ejecutar la prueba y puede ser eliminada.
*/

/*linea 2 de codigo <---La segunda línea importa el módulo `addFive` desde el archivo `./addFive`.
  Este módulo debería exportar una función que toma un número como argumento y devuelve ese número más 5.

//linea 3 de codigo <---La tercera línea importa el módulo `expect` que se utiliza para hacer afirmaciones en las pruebas.

Finalmente, la función `test` define una prueba con una descripción y una función de devolución de llamada.
Dentro de esta función, se llama a la función `addFive` con el argumento 1 y se espera que devuelva 6.
La función `expect` se utiliza para verificar si el valor devuelto es igual al valor esperado
utilizando el método `toBe`.*/