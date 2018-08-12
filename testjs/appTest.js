//  Connect to the API URL (https://teamtreehouse.com/username.json)
//  Read the data
//  Parse the data
//  Print the data

// Test Case 104 print single user info
if(printMessage('chalkers', 196, 5975
) !== 'chalkers has 196 total bage(s) and 5975 points in JavaScript') {
    throw new Error('Fail Test Case: 104 print single user info')
}

// Test Case: 103 connect success
if(connectTreeHouseUserAPI('https://teamtreehouse.com/chalkers.json'
) == undefined || connectTreeHouseUserAPI('https://teamtreehouse.com/chalkers.json'
) == null) {
    throw new Error('Fail Test Case: 103 connect success')
}

// Test Case: 101 print chalkders info
if(printUsersInfo(['chalkers'
]) !== 'chalkers has 196 total bage(s) and 5975 points in JavaScript') {
    throw new Error('Fail Test Case: 101 print chalkders info')
}

// Test Case: 102 print davemcfarland info
if(printUsersInfo(['davemcfarland'
]) !== 'chalkers has 227 total bage(s) and  8241 points in JavaScript') {
    throw new Error('Fail Test Case: 102 print davemcfarland info')
}

