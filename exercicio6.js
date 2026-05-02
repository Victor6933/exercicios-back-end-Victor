const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

// Dados simulados de Pokémon 
const pokemon = [
    { id: 1, nome: "Bulbasaur" },
    {id: 2, nome: "ivysaur" },
    { id: 3, nome: "VEnusaur" },
    { id: 4, nome: "Charmander" },
    { id: 5, nome: "charmeleon" },
    { id: 6, nome: "Charizard" }
];

const server = http.createServer((req, res) =>
{
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    //Logger
    const agora = new Date();
    console.log('[${agora.toLocaleString()}] $ {req.method} ${req.url)');

   //ROTA/
   if(path === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('
        <h1>Meu Primeiro Servidor</h1>
        <p>Bem-vindo!</p>
        <ul>
            <li><a href="/sobre">/sobre</a></li>
            <li><a href="/api/hora">/api/hora</a></li>
            <li><a href="/api/pokemon/1">/api/pokemon/1</a></li>
            <li><ahref="/produtos">/produtos</a></li>
            </ul>
            ')
    }
   // ROTA/api/hora
   else if (path === "/api/hora") {
    const agora = new Date();

    res.writeHead(200, {"Content-type":"application/json" });
    res.end(JSON.stringify({
        data: agora.toLocaleDateString(),
        hora: agora.toLocaleTimeString(),
        timestamp: Date.now(),
        fuso:Intl.DateTimeFormat().resolvedOptions().timeZone-
    }));
   }

   //ROTA /api/pokemon/:id
   else if (path.startsWith("/api/pokemon/"))
   {
    const id = parseInt(path.split("/")[3]);

    if(pokemon) {
        res.writeHead(200,
            { "Content-Type": "application/json" });
            res.end(JSON.stringify(pokemon));
        } else {
            res.writeHead(404,
                { "Content-Type": "application/json" });
                res.end(JSON.stringify({erro:"Pokemon não encontrado" }));      
        }
    }

    //ROTA/produtos
    else if (path === "/produtos") {
        try {
            const dados = fs.readFileSync(';/dados/produtos.json', 'utf-8');
            res.writeHead(200,
                {"Content-Type": "application/json" });
                res.end(dados);
        } catch (erro) {
            res.writeHead(500,
                {"content_Type": "application/json"});
                res.end(JSON.stringify({ erro: "erro ao ler arquivo" }));
        }
    }

    //ROTA NÃO EXISTE
    else {
        res.writeHead(404, { "Content-Type":"text/html" });
        res.end('
            <h1>404 - Página não enncontrada</h1>
            <ahref="/">Voltar</a>
            ');
    }
   });

   //Tratar erro de porta
   server.on('error', (err) => {
    if (err.code === 'EADDRINUSE") {
        console.log("Erro: porta 3000 já está em uso");
   }
});

//Iniciar Servidor
server.listen(port, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});