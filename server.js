//import http from "http";  //já não é mais preciso ultilizar essa importação pois foi substituida pelo express;
import app from "./src/app.js";
import "dotenv/config";
const PORT = 3000;

/*const rotas = {       //já não é mais preciso ultilizar essa criação de rotas pois foi substituido pelo express;
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota Livros",
    "/autores": "Entrei na Rotas Autores"
};*/

/*const server = http.createServer((req, res) => {       //a Criação do servidor também já foi substituido pelo framework exrpess!
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});*/

app.listen(PORT,() => { //mudança de "server" para "app"
    console.log("servidor escutando");
});

