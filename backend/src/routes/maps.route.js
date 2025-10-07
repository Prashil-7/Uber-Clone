const { captainAuth } = require('../middleware/captain.middlle')
const router = require('express').Router();
const {query} = require('express-validator')
const mapController = require('../controllers/maps.controller')





const maps = router.get('/get-cordinates',
    query('address').isString().isLength({min:3}), 
    captainAuth , mapController.getCoordinates);

const distance = router.get('/get-distance', 
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    captainAuth, mapController.getDistance
)

const suggestions = router.get('/get-suggestion',
    query('input').isString().isLength({min:3}),
    captainAuth, mapController.suggestionsMap)




module.exports = router;
module.exports = {
    maps,
    distance
}