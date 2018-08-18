// vat api
// using company email
// using xxxlok as pw

const fetch = require('node-fetch')
const orderTotal = require('./order-total').orderTotal
const createItem = require('./order-total').createItem


const result = orderTotal(fetch, 'a52c1771e4f220f9005b15d8c45a5f1e', {
    country: 'DE',
        items: [
            createItem('Dragon waffles', 20, 2)
        ]
}).then(result => console.log(result))



/*
const result = fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers: {
        'apikey': 'a52c1771e4f220f9005b15d8c45a5f1e'
    }    
}).then(resp => resp.json())

.then(data => console.log(data.rates.standard.value))
*/


    