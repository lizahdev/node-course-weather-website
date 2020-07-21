const request = require('request')

const forecast = (lat, lon, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=94a99892cccbc6c1c0540d42cf252db3&query=' + lat + ',' + lon + '&units=f'

    // url:  shorthand syntax
    // {body} <-- response:  destructuring ..inline
    // request({ url, json: true }, (error, response) => {
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect  to weather service!', undefined)
        // } else if (response.body.error) {
        } else if (body.error) {    
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, 
                // response.body.current.weather_descriptions[0] + '. It is currently ' + 
                // response.body.current.temperature + ' degrees out.  It feels like ' +
                // response.body.current.feelslike + ' degrees out.'
                body.current.weather_descriptions[0] + '. It is currently ' + 
                body.current.temperature + ' degrees out.  It feels like ' +
                body.current.feelslike + ' degrees out. The humidity is ' +
                body.current.humidity + '%.'
            )
        }
    })
}

module.exports = forecast