//import http from "http";
import app from "./src/app.js";
const PORT = 3000;

/*const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota Livros",
    "/autores": "Entrei na Rotas Autores"
};*/

/*const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});*/

app.listen(PORT,() => { //mudança de "server" para "app"
    console.log("servidor escutando");
});

