import express from "express";

const app = express();

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

app.get("/",(req,res) => {  //o get é método http que eu quero que ele faça!
    res.status(200).send("Curso de Node.js"); //o send só é ultilizado para estruturas simples tipo uma string!
});

app.get("/livros", (req,res) => {
    res.status(200).json(livros);  //já o json explicita que quer que retorne um arquivo json!
});

export default app;