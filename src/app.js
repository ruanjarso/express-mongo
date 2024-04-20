import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conecxão com o banco feita com sucesso!")
});

const app = express();
routes(app);

app.delete("/livros/:id",(req,res) => { //O ".delete" é para realizar o método DELETE do http que deleta um dado!
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);   //O "splice" é um método javaScript que deleta um elemento de um array!
    res.status(200).send("O livro foi deletado!");
})

export default app;