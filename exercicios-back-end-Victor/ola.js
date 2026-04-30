console.log("ola back");
const os = require('os');
const nome = process.argv[2] ||"usuário";
console.log(Olá, ${nome}! Bem-vindo ao Node.js);
console.log(Versão do Node.js: $ {process.vesion});
console.log(Sistema operacional: ${os.type()} ${os.releas()});
console.log(Diretório atual: $ {process.cwd()}): 

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log("erro: informe 3 argumentios -> número operador número");
    process.exit(1);
}

let [num1, operador, num2] = args;

num1 = Number(num1);
num2 = Number(num2);

if (isNaN(num1) || isNaN (num2)) {
    console.log("erro: od valores devem ser numeros válidos");
}

let resultados;

switch (operador) {
    case "+":
        resultado = num1 + num2;
        break
        case "-":
        resultado = num1 - num2;
        break;
        case "*":
            resultado = num1 * num2;
            break;
            case"/":
            if (num2 === 0) {
                console.log("erro: divisão por zero");
                process.exit(1);
            }
            resultado = num1 / num2;
            break;
            default:
                console.log ("erro: operador invalido");
                process.exit(1);
            }

console.lo('resultado: ${num1} ${operador} ${num2} = ${resultado}');