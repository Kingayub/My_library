const Genres = require("../models/Genres.model")

module.exports.genresController = {
    addGenres: (req, res) => {
        Genres.create({
            nameGenres: req.body.nameGenres,
            descriptionGenres: req.body.descriptionGenres
        }).then((g) => {
            res.json(g)
        })
    },
    deleteGenres: (req, res) => {
        Genres.findByIdAndDelete(req.params.id).then(() => {
            res.json("Genre deleted")
        })
    },
    getAllGenres: (req,res)=> {
        Genres.find().then((g)=> {
            res.json(g)
        })
    }
}