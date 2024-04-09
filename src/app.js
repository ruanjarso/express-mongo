import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/",(req,res) => {  //o get é método http que eu quero que ele faça!
    res.status(200).send("Curso de Node.js"); //o send só é ultilizado para estruturas simples tipo uma string!
});

app.get("/livros", (req,res) => {
    res.status(200).json(livros);  //já o json explicita que quer que retorne um arquivo json!
});

app.get("/livros/:id",(req,res) => { //O ":" em ":id" é para avisar o express que o "id" vai ser algo variável!
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros",(req,res) => { //O ".post" é para realizar p método POST do http que a gente quer!
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso!")
})

app.put("/livros/:id",(req,res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

export default app;