import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({  //definição do modelo que queremos que um livro seja!
    id:{ type: mongoose.Schema.Types.ObjectId },
    titulo: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema); //"livros" <= refere-se a coleção e livroSchema refere-se ao modelo que declaramos logo a cima!

//exportação do modelo para que outros arquivos interaja, com isso!
export default livro;