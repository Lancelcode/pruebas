//Lo que ocurre cuando usamos var es que el compilador de JS , crea una variable  en  "var"
//y luego le assigna el nombre -miJamoncito-, luego le assignamos con "=" el valor de 'saborcitoRico'.

//EJEMPLO 1 VAR funciona correctamente

var miJamoncito = 'saborcitoRico'
miJamoncito = 'otro valor saborcito'//<----- aqui actualiza el valor , ahora printeara 'otro valor saborcito'
//console.log(miJamoncito) //printeara la palabra 'saborcitoRico'


//EJEMPLO 2 VAR (A & B) no funciona correctamente

//Ejemplo A
/*
var miJamoncito
console.log(miJamoncito) //no a sido declarada, printeara 'undefined' ya que no esta declarada aun, en otros lenguajes daria error.
miJamoncito = 'saborcitoRico' //aqui seria declarada como: 'saborcitoRico'
*/

/*
//Ejemplo B
console.log(miJamoncito) //no a sido declarada, printeara 'undefined' ya que no esta declarada
var miJamoncito //<--- saborcitoRico vacia sin valor declarado.
miJamoncito = 'saborcitoRico' //aqui seria declarada como: 'saborcitoRico'.
*/

let saborcitoRico = 'saborcitoRico creada con let'
saborcitoRico = 'otro valor a let'

//const constante = 'este valor es constante'

console.log(miJamoncito,saborcitoRico)