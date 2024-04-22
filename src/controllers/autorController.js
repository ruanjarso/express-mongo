import autor, { autor } from "../models/Autor.js";

class AutorController { //classe na qual vamos exportar os métodos que estão nela!

    static async listarAutores(req, res) { /* sobre o "static":  
    Métodos Estáticos:
    Definição: Um método estático é declarado usando a palavra-chave static.
    Chamada: Os métodos estáticos não são chamados em instâncias da classe.
    Em vez disso, eles são chamados diretamente na própria classe.
    Utilidade: Geralmente, os métodos estáticos são funções utilitárias, 
    como aquelas usadas para criar ou clonar objetos.

    EXEMPLO:
    class ExemploClasse {
        static metodoEstatico() {
        return "O método estático foi chamado";
    }
    }

    // Chamada do método estático:
    console.log(ExemploClasse.metodoEstatico());
    
    Saída: "O método estático foi chamado"
    */

        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);  //já o json explicita que quer que retorne um arquivo json!           
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }

    };

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);  //já o json explicita que quer que retorne um arquivo json!           
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` })
        }
    };

    static async cadastrarAutor(req, res) {
        // O try catch serve para manejos de tentativas e falhas!
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor!` });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor atualizado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` })
        }
    };

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "autor deletado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão!` })
        }
    }

};

export default AutorController;