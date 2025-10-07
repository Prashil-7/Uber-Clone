const mapService =  require('../services/mapsApi')
const {validationResult} = require('express-validator')


module.exports.getCoordinates = async (req,res,next)=>{

      const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() });
    }


    const {address} = req.query;

    try {
        const Coordinates = await mapService.getAddressCordinates(address)
        res.status(200).json(Coordinates);

    } catch (error) {
        res.status(404).json({mag: " internal server error"});
    }
}

module.exports.getDistance = async (req,res)=>{
    
    
    try {
        
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.json({msg:'req handlerget distance', errors: errors.array()});
            }
            const {origin , destination} = req.query;
            const distanceTime = await mapService.getDistanceTime(origin , destination);
            res.status(200).json(distanceTime);


    } catch (err) {
        console.error('the err im get distance', err)
        res.status(404).json({msg:'internal server err'})
            
    }
}

module.exports.suggestionsMap = async (req,res)=>{
    
         
    try {
        
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.json({msg:'req handlerget distance', errors: errors.array()});
            }
            const {suggestion} = req.query;
            const Suggestions = await mapService.SuggestionsService(suggestion);
            res.status(200).json(Suggestions);


    } catch (err) {
        console.error('the err im get suggestions', err)
        res.status(404).json({msg:'internal server err'})
            
    }


}