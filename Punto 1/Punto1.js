//solicitar variables
let operacion = prompt("Ingrese la operación: (+, -, *, /, %): ");
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

//validar que los valores ingresados sean números
if (isNaN(num1) || isNaN(num2)) {
    console.log("ERROR: Debe ingresar valores numéricos");
} else {
    let resultado;
}

//operaciones
if (operacion === "+"){
    resultado = num1 + num2;
} else if (operacion === "-"){
    resultado = num1 - num2;
} else if (operacion === "*"){  
    resultado = num1 * num2;
} else if (operacion === "/"){
    if (num2 === 0){
        console.log("ERROR: No se puede dividir entre cero");
        resultado = "Indefinido"; //evita que el resultado se imprima y se muestre un error
    } else {
        resultado = num1 / num2;
    }
} else if (operacion === "%"){
    if (num2 === 0){
        console.log("ERROR: No se puede calcular el módulo con divisor cero.");
        resultado = "Indefinido"; //evita que el resultado se imprima y se muestre un error
    } else {
    resultado = num1 % num2;
    }
} else {
    console.log("ERROR: Operación no válida");
}

//mostrar resultado
    console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);


