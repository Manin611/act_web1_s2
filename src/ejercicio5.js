
let dia = 'Lunes';

dia = dia.toLowerCase();

switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
        console.log("laborable");
        break;
    case 'sabado':
    case 'domingo':
        console.log("fin de semana");
        break;
    default:
        console.log("Día no válido");
}

