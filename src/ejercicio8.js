
let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let descuento = 0;
let precioFinal;

if (edad < 18) {
    descuento = 0.20; 
} else if (edad >= 65) {
    descuento = 0.40; 
} else {
    descuento = 0; 
}

precioFinal = tarifaBase - (tarifaBase * descuento);
precioFinal = Math.round(precioFinal * 100) / 100;

console.log(precioFinal);


