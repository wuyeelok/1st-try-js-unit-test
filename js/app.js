//console.log('Hello world')
//console.error('Ooops something worng')
//console.dir({name: 'Kenneth', age: '27'})

// Problem: We need a simple way to look at user's badge count and JS points

// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const username = 'chalkers'


const printMessage = (username, badgeCount, point) => {
    const message = `${username} has ${badgeCount} total bage(s) and ${point} points in JavaScript`
    console.log(message)
    return message
}


const https = require('https')

//  Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

    console.log(response.statusCode)
    //  Read the data
    //  Parse the data
    //  Print the data
})
