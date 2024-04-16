import livro from "../models/Livro.js";

class LivroController {
    
    static async listarLivros (req,res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);  //já o json explicita que quer que retorne um arquivo json!
    };

    static async cadastrarLivro (req,res) {
        // O try catch serve para manejos de tentativas e falhas!
        try {
            const novoLivro = await livro.create(req,body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro!` });
        }
    }

};

export default LivroController;