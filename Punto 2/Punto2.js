
// nombrar variables
let sabor = prompt("Ingrese el sabor de la pizza que desea:");
let tamaño = prompt("Ingrese el tamaño que desea (Grande, Mediana, Personal):");
let deseabebida = prompt("¿Desea agregar bebida? (Si/No):");
let bebida = "";

if (deseabebida === "Si"|| deseabebida == "si" || deseabebida == "SI") {
    bebida = prompt("Ingrese la bebida que desea:");
}

let mensaje = "Confirmar pedido: ";
mensaje += "Pizza: " + sabor;
mensaje += ", Tamaño: " + tamaño;

if (deseabebida === "Si"|| deseabebida == "si" || deseabebida == "SI") {
    mensaje += ", Bebida: " + bebida;
} else{
    mensaje += ", Sin Bebida";
}

//confirmación de pedido
let confirmar = confirm(mensaje + " ¿Desea confirmar el pedido? (Si/No):");

if (confirmar) {
    console.log("Pedido Confirmado");
} else {
    console.log("Pedido Cancelado");
}