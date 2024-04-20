import livro from "../models/Livro.js";

class LivroController {
    
    static async listarLivros (req,res) {

        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);  //já o json explicita que quer que retorne um arquivo json!           
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` } )
        }

    };

    static async listarLivroPorId (req,res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);  //já o json explicita que quer que retorne um arquivo json!           
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` } )
        }
    };

    static async cadastrarLivro (req,res) {
        // O try catch serve para manejos de tentativas e falhas!
        try {
            const novoLivro = await livro.create(req,body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro!` });
        }
    }

};

export default LivroController;