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

const alunos = [
{ nome: "Ana Silva", nota: 8.5, idade: 16, turma: "3A", faltas: 2 },
{ nome: "João Santos", nota: 6.0, idade: 17, turma: "3B", faltas: 8 },
{ nome: "Maria Oliveira", nota: 9.0, idade: 16, turma: "3A", faltas: 0 },
{ nome: "Pedro Costa", nota: 4.5, idade: 17, turma: "3B", faltas: 12 },
{ nome: "Julia Lima", nota: 7.5, idade: 16, turma: "3A", faltas: 3 },
{ nome: "Carlos Mendes", nota: 5.5, idade: 17, turma: "3B", faltas: 7 },
{ nome: "Beatriz Rocha", nota: 8.0, idade: 16, turma: "3A", faltas: 1 },
{ nome: "Lucas Ferreira", nota: 6.5, idade: 17, turma: "3B", faltas: 5 }
];

// 1. Aprovados
const aprovados - alunos.filter(a => a.nota >=6);
console.log("alunos Aprovados");
aprovados.forEach(a => console.log(a));

//2. Apenas nomes
const nomes = alunos.map(a => a.nome);
console.log("\nLista de nomes:");
nomes.forEach(nomes => console.log(nome));

//3. Strings formatadas
const boletim = alunos.map(a => {
    const status = a.nota >= 6 ? "Aprovado" : "Reprovado";
    return '${a.nome'} - nota: ${a.nota} - Status: ${status}';
});

console.log("\nBoletim:");
boletim.forEach(linha => console.log(linha));

//4. Média geral
const media = alunos.reduce ((soma, a) => soma + a.nota, 0) / alunos.lenghth;
console.log('\nMédia da turma: $ {media.toFixed(2)}');

//5. Agrupar por turma
const turmas = {};
alunos.forEach(a => {
    if (!turmas[a.turma]) {
        turmas[a.turma] = [];
    }
    turmas[a.turma].push (a.nome);

});
console.log("\nAlunos por turma:");
console.log(turmas);

//6. Mais de 6 faltas
const risco = alunos.filter(a => a.faltas > 6);
console.log("\nAlunos em risco de faltas:");
risco.forEach(a => console.log(a.nome));

//7.Top3 da turma 3A
const top3 = alunos;
.filter(a => a,turma === "3A")
.sort((a.b) => b.nota - a.nota)
.slice(0,3);

console.log("\nTop 3 alunos da 3A");
top3.forEach(a => console.log('${a.nome} - ${a.nota}'));