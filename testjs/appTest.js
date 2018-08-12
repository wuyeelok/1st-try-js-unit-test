//  Connect to the API URL (https://teamtreehouse.com/username.json)
//  Read the data
//  Parse the data
//  Print the data

// Test Case: 101 print chalkders info
if(printUsersInfo(['chalkers'
]) !== 'chalkers has 196 total bage(s) and 5975 points in JavaScript') {
    throw new Error('Fail Test Case: 101 print chalkders info')
}

// Test Case: 102 print davemcfarland info
if(printUsersInfo(['davemcfarland'
]) !== 'chalkers has 227 total bage(s) and  8241 points in JavaScript') {
    throw new Error('Test Case: 102 print davemcfarland info')
}