//1. Analisar URL
function analisarURL(urlStr) {
    const url = new URL(urlStr);

    return {
        protocolo: url.protocol.
        dominio: url,hostname.
        porta: url.port || "padrão",
        caminho: url.pathname,
        parametros:
        Object.fromEntries(url.searchParams.entries()),
        fragmento: url,hash || "nenhum"
    };
}

const exemplo =
"https://api.exemplo.com:3000/produtos/123?categoria=eletronicos&ordem=preco#detalhes";
console.log("Análise da URL:");
    console.log(analiarURL(exemplo));

    //2.simular requisição
    function simularRequesiçao(metodo,url,dados=null) {
        console.log("\n--- REQUISIÇÂO ---");
        console.log("Método:", metodo);
            console.log("URL:",url);
            if (dados) {
                console.log("Body:", dados);
            }
            let status = 200;

            if (metodo === "post") status= 201;
            if (metodo === "delete") status = 204;

            console.log("Status:", status);
    }

    simularRequisicao("get", "/usuarios");
    simularRequisicao("post", "/usuarios", { nome: "joão" });
    
    //3. Status HTTP
    const sttusHTTP = {
        200: "ok",
        201: "Criado",
        204: "Sem conteudo",
        400: "Erro de requisição",
        401: "Não autorizado",
        403: "proibido",
        404: "Não encontrado",
        500: "Erro interno"
    };

    console.log("\nStatus HTTP;");
    console.table(statusHTTP);

    //4. Simulador de rotas
    const usuarios = [
        { id: 1, nome: "Ana"}
        { id: 2, nome: "Carlos" }
    ];

    function servidor(metodo, rota) {
        console.log('zn[${metodo}] ${rota}');

        if (metodo === "get" && rota === "/usuarios/1"){ 
            console.log("Status: 200");
        console.log(usuarios[0]);
    }
    else if (metodo === "POST" && rota === "/usuarios") {
        console.log("Status:201")
        console.log("Usuário criado (simulado)");
    }
    else if (metodo === "DELETE" && rota === "/usuários/1") {
        console.log("Status: 204");
        console.log("Usuários removido");
    }
    else {
        console.log("Status:404");
        console.log("Rota não encontrada");
    }
}

servidor("GET", "/usuarios");
servidor("GET", "/usuarios/1");
servidor("POST", "/usuarios");
servidor("DELETE", "/usuarios/1");

//5. Validar URL
function urlValida(url) {
    try{
        new url(url);
        return true;
    } catch {
        return false;
    }
}

console.log("\nURL válida?",
urlValida(exemplo));

//6. Extrair query string
function extrairQuery(urlStr) {
    const url = new URL(urlStr);
    return
    Object.fromEntries(url.searchParams.entries());
}

console.log("\nParâmetros da URL:");
console.log(extrairQuery(exemplo));