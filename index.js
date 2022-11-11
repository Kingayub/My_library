const express = require("express")
const mongoose = require("mongoose")
const port = 5000
const app = express()
app.use(express.json())

app.use(require("./routes/books.route"))
app.use(require('./routes/genres.route'))
app.use(require('./routes/author.route'))
app.use(require('./routes/bookreviev.route'))

mongoose.connect("mongodb+srv://Ayub:Salavdi1994@cluster0.qdi4tkn.mongodb.net/library?retryWrites=true&w=majority")

app.listen(port, () => {
    console.log("Server get started")
})