
let nombre = 0
const gravedad = 9.81

nombre  = ""
let suma = sumar(2,2)
const iva = .16
let valueIva = suma  * iva

imprimirConsola(valueIva)

let objPersona = {
    nombre: "Pablo",
    edad: "28",
    sexo: "M",
    fechaNacimiento: "02"
}
let objPersona2 = {
    nombre: "Eliot",
    edad: "28",
    sexo: "M",
    fechaNacimiento: "02"
}

let lstPersonas = [objPersona, objPersona2]


console.log(lstPersonas)
console.log(lstPersonas[1].fechaNacimiento)

function sumar (num1, num2){
   return ( num1 + num2)
}

function imprimirConsola(iva){
    console.log(iva)
}