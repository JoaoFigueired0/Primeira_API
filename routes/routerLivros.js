const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controller/controllerLivro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router