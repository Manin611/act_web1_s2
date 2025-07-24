let a = 10;
let b = 3;
let operador = '*';
let resultado;
switch (operador) {
  case '+':
    resultado = a + b;
    console.log(resultado);
    break;
  case '-':
    resultado = a - b;
    console.log(resultado);
    break;
  case '*':
    resultado = a * b;
    console.log(resultado);
    break;
  case '/':
    if (b === 0) {
      console.log("indeterminado");
    } else {
      resultado = a / b;
      console.log(resultado);
    }
    break;
  default:
    console.log("operador no válido");
}
