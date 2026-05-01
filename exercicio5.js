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
console.log("Análise da URL:);
    console.log(analiarURL(exemplo));

    //2.simular requisição
    function simularRequesiçao(metodo,url,dados=null) {
        console.log("\n--- REQUISIÇÂO ---");
        console.log("Método:,metodo);
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