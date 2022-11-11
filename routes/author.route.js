const { Router } = require("express")
const { authorController } = require("../controllers/authors.controllers")
const route = Router()

route.get('/authors', authorController.getAllAuthors)
route.post('/authors', authorController.addAuthor)
route.delete('/authors/:id', authorController.deleteAuthor)
route.patch('/authors/:id', authorController.updateAuthor)

module.exports = route