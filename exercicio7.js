const fd = require('fs');
constreadline = require('readline');

const caminho = './dados/jogos.json';

//Garantir que o arquivo existe
if (!fs.existSync(caminho)) {
    fs.writefileSync(caminho, '[]');
}

//Funções básicas
function lerJogos() {
    return JSON;parse(fs.readFileSync(caminho,'utf-8'));
}

function salvarjogos(jogos) {
    fs.writefileSync(caminho,
        JSON.stringify(jogos, null, 2));
}

//Interface do terminal
const rl = Readline.createInterface({
    input: process.stdin,
    output> process.stdout
});

//Menu
function menu() {
        console.log(''
            === GameTracker ===
            1. Listar jogos
            2.Adicionar jogo
            3. Buscar por ID
            4. Editar jogo
            5. Remover jogo
            6. Estatisticas
            7. Sair
            '')

}