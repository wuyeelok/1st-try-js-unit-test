//console.log('Hello world')
//console.error('Ooops something worng')
//console.dir({name: 'Kenneth', age: '27'})

// Problem: We need a simple way to look at user's badge count and JS points

// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
// const username = 'chalkers'

const getProfile = usersNameArray => {

    const printMessage = (username, badgeCount, point) => {
        const message = `${username} has ${badgeCount} total bage(s) and ${point} points in JavaScript`
        console.log(message)
        return message
    }
    
    const connectTreeHouseUserAPI = url => {
        const https = require('https')
    
        //  Connect to the API URL (https://teamtreehouse.com/username.json)
        const request = https.get(url, response => {
    
            //  console.log(response.statusCode)
            //  Read the data
            let body = "";
            response.on('data', data => {
                body += data.toString()
            });
    
            response.on('end', () => {
                //  Parse the data
                //  console.log(body)
                //  console.log(`type of: ${typeof body}`)
    
                const profile = JSON.parse(body);
    
                // Print the data
                printMessage(profile.profile_name, profile.badges.length, profile.points.JavaScript);
                
            })        
            
        })
    }

    usersNameArray.forEach(user => {
        const url = `https://teamtreehouse.com/${user}.json`

        connectTreeHouseUserAPI(url)
    })

}

// const users = ['chalkers', 'davemcfarland', 'alenaholligan'];
// const users = process.argv.slice(2)

// getProfile(users)

let unsecurePlainTextPassword = "password"

let bcrypt = require('bcrypt')
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash)
    });
});





