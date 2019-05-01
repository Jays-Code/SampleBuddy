const express = require('express')
const router = express.Router()
const mainController = require('../controllers/controller')




router.get('/', function(request, response) {
    response.send('This is the root page')
})

router.get('/addGenre', mainController.addGenre)
router.post('/Genres', mainController.newGenre)
//router.put('/Genres/:id', mainController.editGenre)
router.delete('/Genres/:id', mainController.deleteGenre)

router.get('/addArtist', mainController.addArtist)
router.post('/Artists', mainController.newArtist)
//router.put('/Artists/:id', mainController.editGenre)
router.delete('/Artists/:id', mainController.deleteArtist)


router.get('/Genres', mainController.genreIndex)
router.get('/Artists', mainController.artistIndex)  
router.get('/Songs', mainController.songIndex)


router.get('/Genres/:id', mainController.oneGenre)
router.get('/Artists/:id', mainController.oneArtist)
router.get('/Songs/:id', mainController.oneSong)

router.get('/addSong', mainController.addArtist)
router.post('/Songs', mainController.newArtist)
//router.put('/Songs/:id', mainController.editGenre)
router.delete('/Songs/:id', mainController.deleteArtist)


//router.post('/createAll', mainController.createAll)


    


//router.get('/')

module.exports = router