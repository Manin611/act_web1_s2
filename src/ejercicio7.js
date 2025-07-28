
let precioUnitario = 25;
let cantidad = 60;
let precioFinal;
let total = precioUnitario * cantidad;
let descuento = 0;

if (cantidad < 10) {
    descuento = 0;
} else if (cantidad >= 10 && cantidad < 50) {
    descuento = 0.10;
} else if (cantidad >= 50) {
    descuento = 0.20; 
}

precioFinal = total - (total * descuento);
precioFinal = Math.round(precioFinal * 100) / 100;

console.log(precioFinal);

