const { Router } = require("express")
const route = Router()
const { booksRevievController } = require("../controllers/booksreviev.controllers")

route.get('/booksreviev', booksRevievController.getReviev)
route.post('/booksreviev', booksRevievController.addReviev)
route.delete('/booksreviev', booksRevievController.deleteReviev)

module.exports = route