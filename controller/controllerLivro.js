const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro, deletaLivroPorId } = require("../services/servicesLivros")


function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivrosPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send(`Valor de "${id}" não é válido`)
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if (req.body.nome && req.body.id) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro adicionado com sucesso")
        } else {
            res.status(422)
            res.send("Está faltando algum campo")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send("Item modificador com sucesso")
        } else {
            res.status(422)
            res.send(`Valor de "${id}" não é válido`)
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaLivroPorId(id)
            res.send("livro deletado comsucesso")
        } else {
            res.status(422)
            res.send(`Valor de "${id}" não é válido`)
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}