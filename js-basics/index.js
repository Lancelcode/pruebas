//Lo que ocurre cuando usamos var es que el compilador de JS , crea una variable  en  "var"
//y luego le assigna el nombre miVariable, luego a le assignamos con "=" el valor de 'variable'.

//EJEMPLO 1 VAR funciona correctamente
/*
var miVariable

miVariable = 'variable'

console.log(miVariable) //printeara la palabra 'variable'
*/

//EJEMPLO 2 VAR (A & B) no funciona correctamente
/*
//Ejemplo A
var miVariable
console.log(miVariable) //no a sido declarada, printeara 'undefined' ya que no esta declarada aun, en otros lenguajes daria error.
miVariable = 'variable' //aqui seria declarada como: 'variable'
-----------------------------------------------------------------------------------------------------------------------------------
*/
//Ejemplo B
console.log(miVariable) //no a sido declarada, printeara 'undefined' ya que no esta declarada
var miVariable //<--- variable vacia sin valor declarado.
miVariable = 'variable' //aqui seria declarada como: 'variable'.


//let variable = 'variable creada con let'




//const constante = 'este valor es constante'