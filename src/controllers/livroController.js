import livro from "../models/Livro.js";

class LivroController { //classe na qual vamos exportar os métodos que estão nela!

    static async listarLivros(req, res) { /* sobre o "static":  
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
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);  //já o json explicita que quer que retorne um arquivo json!           
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }

    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);  //já o json explicita que quer que retorne um arquivo json!           
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` })
        }
    };

    static async cadastrarLivro(req, res) {
        // O try catch serve para manejos de tentativas e falhas!
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro!` });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` })
        }
    };

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "livro deletado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão!` })
        }
    }

};

export default LivroController;