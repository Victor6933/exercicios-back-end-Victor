console.log("ola back");
const os = require ('os');
const nome = process.argv[2] ||"usuário";
console.log(Olá, ${nome}! Bem-vindo ao Node.js);
console.log(Versão do Node.js: $ {process.vesion});
console.log(Sistema operacional: ${os.type()} ${os.releas()});
console.log(Diretório atual: $ {process.cwd()}):