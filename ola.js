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

const fs = require('fs');

//catálogo inicial
let catalogoFilmes = [
{ id: 1, titulo: "Matrix", ano: 1999, diretor: "Lana Wachowski", genero: "Ficção", nota: 4.8 },
{ id: 2, titulo: "Titanic", ano: 1997, diretor: "James Cameron", genero: "Romance", nota: 4.5 },
{ id: 3, titulo: "Toy Story", ano: 1995, diretor: "John Lasseter", genero: "Animação", nota: 4.7 },
{ id: 4, titulo: "O Poderoso Chefão", ano: 1972, diretor: "Francis Ford Coppola", genero: "Drama", nota: 4.9 },
{ id: 5, titulo: "Star Wars", ano: 1977, diretor: "George Lucas", genero: "Ficção", nota: 4.6 }
];

//1.Converter para JSON 
const jsonString = 
JSON.stringify(catalogoFilmes, null, 2);
console.log(jsonString);
console.log("tipo>", typeof jsonString);

//2.Simular JSON de API
const novosFilmesJSON = '[
{ "id": 6, "titulo": "Avatar", "ano": 2009, "diretor": "James Cameron", "genero": "Ficção", "nota": 4.4 },
{ "id": 7, "titulo": "Vingadores", "ano": 2012, "diretor": "Joss Whedon", "genero": "Ação", "nota": 4.3 },
{ "id": 8, "titulo": "Frozen", "ano": 2013, "diretor": "Chris Buck", "genero": "Animação", "nota": 4.2 }
]';

//converter JSON para objetivo
const novosFilmes =
JSON.parse(novosFilmesJSON);

//Adicionar ao catálogo
catalogoFilmes =
catalogoFilmes.concat(novosFilmes);

//3. Buscar por ID
function buscarFilmes.find(id) {
    return catalogoFilmes.find(f => f.id === id) || null;
}

console.log("\nBuscar ID 3:",
    buscarFilmesporID(3));
    console.log("Buscar ID 99:"
        buscarFilmesporID(99));

//4. Buscar por gênero
function buscarporGênero(genero) {
    return catalogoFilmes.filter(f => f.genero === genero);
}

console.log("\nFIlmes de Ficção:");
console.log(buscarporGênero("Ficção"));

//5. Salvar em arquivo
fs.writeFileSync('filmes.json',
    JSON.stringify(catalogoFilmes, null, 2));

//ler arquivo
const dados = fs.readFileSync('filmes.json',
    'utf-8');
    const catalogoLido = JSON,parse(dados);

console.log("\nArquivo lido com sucesso: ");
console.log(catalogoLido);

//6. Strings formatadas
const fichas = catalogoFilmes.map(f=>{
    return'${f.titulo} (${f.ano}) - Dirigido por ${f.diretor}\nGêneroo: ${f.genero} | nota ${f.nota}/5.0;
});

console.log("\nFichas dos filmes:");
fichas.forEach(f => console.log(f + "\n"));