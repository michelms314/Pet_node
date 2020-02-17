const http = require("http");
const petshop = require("./petshop");
const url = require("url");

const server = http
    .createServer((req, res) => {
    // quando faço requisição no navegador
    // res.end("Servidor rodando!")
    // req: request; res: response

    // if(req.url == "/pets"){
    //     return res.end("Listando pets...");
    // }
    res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8"})
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query; //parâmetros
    let rota = urlCompleta.pathname; //ex pets/add
    console.log(urlCompleta);
    
    switch(rota){
        case"/pets":
            let conteudo = petshop.listarPets();
            if (conteudo.length > 0){
                res.write(conteudo);
            }
            else{
            res.write("Nenhum Pet cadastrado!");
            }
            break;

        case "/pets/add":
            let novoPet = queryString;
            petshop.adicionarPet(novoPet);
            res.write(`${novoPet} foi adicionado à nossa lista!`);
            break;

        case "/pets/buscar":
                let petBuscado = queryString.nome;
                let achou = petshop.buscarPet(petBuscado);
                let response = achou ? res.write(`Achamos o ${petBuscado} !`) : res.write(`Não encontramos o ${petBuscado}  `);
                break;
        default:
            res.write("Aôba!");
    }
    res.end()
})
.listen(3000, "localhost", () => {
    console.log("Rodando na porta 3000");
        // quando ligo o servidor
})