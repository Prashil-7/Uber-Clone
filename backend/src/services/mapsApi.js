const axios = require ('axios')



module.exports.getAddressCordinates = async (address) => {
  const apiKey = process.env.MAP_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json`;

  try {
    const response = await axios.get(url, {
      params: {
        address: address,
        key: apiKey
      }
    });

    if (
      response.data.status === 'OK' &&
      response.data.results &&
      response.data.results.length > 0
    ) {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng
      };
    } else {
      throw new Error('No results found for the given address.');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error.message);
    throw error;
  }
};

module.exports.getDistanceTime = async(origin, destination)=>{

  if(!origin || !destination){
    throw new Error('Origin and Distance Needed');
  }
  const apiKey = process.env.MAP_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json`;

  try {
    
    const response = axios.get(url);
    if((await response).data.status === 'OK'  ){

      if((await response).data.rows[0].element[ 0 ].status === 'ZERO_RESULT'){
        throw new Error('No route Found');
      }
      return (await response).data.rows[ 0 ].element[ 0 ];
    }
    else{
      throw new Error('unable to reach route of distance and time');
    }


  } catch (error) {
    console.log("the err in distance time" ,error);
    throw error;
    
  }
}

module.exports.SuggestionsService = async (suggestion)=>{
      if(!suggestion){throw new Error('Query is required')};
       const apiKey = process.env.MAP_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json`;


  try {
    
    const response = axios.get(url);
    if((await response).data.status === 'OK'  ){

      return (await response).data.predictions;
    }
    else{
      throw new Error('unable to fetch suggestions');
    }


  } catch (error) {
    console.log("the err in suggest locations" ,error);
    throw error;
    
  }
  
 
}
