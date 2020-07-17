const request = require('request')   // request is just an npm library

const geocode = (address, callback) => {
    geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZWxpaGNvZGUiLCJhIjoiY2tiamt5cWpoMDNvMjJ6bHg5OXYzc2tmeiJ9.rbaS7wp9fJiHX0vu_zPP7w&limit=1'

    // request( options Object, function to run once the request completes)

    // request({ url: geoURL, json: true }, (error, response) => {
    request({ url: geoURL, json: true }, (error, { body }) => {    
        if (error) {
            callback('Unable to connect to location services!', undefined)
        // } else if (response.body.features.length === 0) {
        } else if (body.features.length === 0) {    
            callback('Unable to find location. Try a new search.', undefined)
        } else {
            callback(undefined, {
                // latitude: response.body.features[0].center[1],
                // longitude: response.body.features[0].center[0],
                // location: response.body.features[0].place_name
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode