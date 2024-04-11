import livro from "../models/Livro.js";

class LivroController {
    
    static async listarLivros (req,res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);  //já o json explicita que quer que retorne um arquivo json!
    }

};

export default LivroController;