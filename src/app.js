import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js"

const conecxao = await conectaNaDatabase();

conecxao.on("erro", (erro) => {
    console.error("erro de conexão", erro);
});

conecxao.once("open", () => {
    console.log("Conecxão com o banco feita com sucesso!")
})

const app = express();
app.use(express.json());

app.get("/",(req,res) => {  //o get é método http que eu quero que ele faça!
    res.status(200).send("Curso de Node.js"); //o send só é ultilizado para estruturas simples tipo uma string!
});

app.get("/livros/:id",(req,res) => { //O ":" em ":id" é para avisar o express que o "id" vai ser algo variável!
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros",(req,res) => { //O ".post" é para realizar o método POST do http que insere um dado!
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso!")
})

app.put("/livros/:id",(req,res) => { //O ".put" é para realizar o método PUT do http que atualiza os dados!
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id",(req,res) => { //O ".delete" é para realizar o método DELETE do http que deleta um dado!
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);   //O "splice" é um método javaScript que deleta um elemento de um array!
    res.status(200).send("O livro foi deletado!");
})

export default app;