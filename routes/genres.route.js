const { genresController } = require("../controllers/genres.controllers")
const { Router } = require("express")
const route = Router()

route.get('/genres', genresController.getAllGenres)
route.post('/genres', genresController.addGenres)
route.delete('/genres/:id', genresController.deleteGenres)

module.exports = route