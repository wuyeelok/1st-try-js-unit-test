const fetch = require('node-fetch')
const result = fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers: {
        'apikey': 'a52c1771e4f220f9005b15d8c45a5f1e'
    }    
}).then(resp => resp.json())
.then(data => console.log(data.rates.standard.value))


    