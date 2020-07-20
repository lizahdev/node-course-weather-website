fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const input = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = "Loading ..."
    messageTwo.textContent = ""
    fetch('/weather?address=' + input.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = 'error: ' + data.error
                return console.log('error: ' + data.error)  
            }

            console.log('forecast: ' + data.forecast)
            console.log('location: ' + data.location)
            console.log('address: ' + data.address)
            messageOne.textContent = 'location: ' + data.location
            messageTwo.textContent = 'forecast: ' + data.forecast
        })
    })
})