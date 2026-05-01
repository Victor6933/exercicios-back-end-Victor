const fs = require('fs');
const caminho = './dados/produtos.json';

//ler produtos
function lerProdutos() {
    const dados = fs.readFileSync(caminho,'utf-8');
    return JSON.parse(dados);
}

//Salvar produtos
function salvarprodutos(produtos) {
    fs.writeFileSync(caminho, JSON.stringify(produtos, null, 2 ));
}

//listar produtos
function listarprodutos() {
    const produtos = lerprodutos();
    console.table(produtios);

    const total = produtos.reduce((soma, p) => soma + (p.preco * p.estoque), 0);
    console.log("Total em estoque: R$, total);
}

// Adicionar produto
function adicionarProduto(nome, preco, estoque)
{
    const produtos = lerprodutos():
    const novosId = produtos[produtos.length - 1].id + 1;
    produtos.push({ id: novosId,nome,preco, estoque});
    salvarprodutos(produtos);

    console.log("produto adicionado!");
}

//buscar produto
function buscarproduto(id) {
    const rpodutos = lerProdutos();
    const produto = produtos.find(p => p.id === id);

    id (produto) console.log(produto);
    else console.log("produto não encontrado");
}

//Atualizar estoque
function atualizarEstoque(id, quantidade) {
    const produtos = terprodutos();
    const produto = produtos.find(p => p.id === id);
    if(!produto) return console.log("produto não encontrado");

    console.log("Antes:", produto);
    produto.estoque = quantidade;
    salvarprodutos(produtos);
    console.log("Depois:", produto);
}

//Remover produto
function removerProduto(id) {
    const produtos = lerProdutos().filter(p => p.id !==id);
    salvarprodutos(produtos);
    console.log("produto removido!");
}

//produtos com estoque baixo
function produtosemFalta(limite) {
    const produtos = lerprodutos();
    const baixos =produtos.filter(p => p.estoque < limite);

    console.table(baixos);
    if (baixos.length > 0) {
        console.log( "fazer reposição!");
    }
}

//TESTE (executa tudo)
listarprodutos();
adicionarProduto("Monitor",900,5);
buscarproduto(2);
atualizarEstoque(1,20);
removerProduto(3);
produtosemFalta(10);