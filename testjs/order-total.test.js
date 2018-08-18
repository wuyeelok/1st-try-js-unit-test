const createItem = require('../js/order-total').createItem
const orderTotal = require('../js/order-total').orderTotal


describe('orderTotal', () => {
    
    describe('Quantity Related', () => {

        it('Quantity', () => {
            orderTotal(null, null, {
                items: [
                    createItem('Dragon candy', 2, 3)
                ]
            }).then(result => expect(result).toBe(6))
        })
        it('No Quantity Specified', () => {
            orderTotal(null, null, {
                items: [
                    createItem('Dragon candy', 3)
                ]
            }).then(result => expect(result).toBe(3))
        })
    })

    describe('Happy Path Related', () => {
        it(' Happy path Test Case 1', () => {
            orderTotal(null, null, {
                items: [
                    createItem('Dragon food', 8, 1),
                    createItem('Dragon cage (small)', 800, 1)
                ]
            }).then(result => expect(result).toBe(808))
        })
        it(' Happy path Test Case 2', () => {
            orderTotal(null, null, {
                items: [
                    createItem('Dragon collar', 20, 1),
                    createItem('Dragon chew toy', 40, 1)
                ]
            }).then(result => expect(result).toBe(60))
        })
    })

    describe('fetch related', () => {
        it('calls vatapi.com correctly if country code specifed', () => {
            let isFakeFetchCalled = false
            const fakeFetch = (url, opts) => {
                //expect(opts.headers.apikey).toBe('key123')
                expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
                isFakeFetchCalled =true
                return Promise.resolve({
                    json: () => Promise.resolve({
                        rates: {
                            standard: {
                                value: 19
                            }
                        }
                    })
                })
            }

            return orderTotal(fakeFetch, 'key123', {
                country: 'DE',
                items: [
                    createItem('Dragon waffles', 20, 2)
                ]
            }  ).then(result => {
                expect(result).toBe(20*2*1.19)
                expect(isFakeFetchCalled).toBe(true)
            })
        })
    })
})
