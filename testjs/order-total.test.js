const createItem = require('../js/order-total').createItem
const orderTotal = require('../js/order-total').orderTotal


describe('orderTotal', () => {
    const emptyFunction = () => {}
    describe('Quantity Related', () => {

        it('Quantity', () => {
            orderTotal(emptyFunction, {
                items: [
                    createItem('Dragon candy', 2, 3)
                ]
            }).then(result => expect(result).toBe(6))
        })
        it('No Quantity Specified', () => {
            orderTotal(emptyFunction,{
                items: [
                    createItem('Dragon candy', 3)
                ]
            }).then(result => expect(result).toBe(3))
        })
    })

    describe('Happy Path Related', () => {
        it(' Happy path Test Case 1', () => {
            orderTotal(emptyFunction,{
                items: [
                    createItem('Dragon food', 8, 1),
                    createItem('Dragon cage (small)', 800, 1)
                ]
            }).then(result => expect(result).toBe(808))
        })
        it(' Happy path Test Case 2', () => {
            orderTotal(emptyFunction,{
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
            const fakeFetch = url => {
                expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
                isFakeFetchCalled =true
            }

            orderTotal(fakeFetch, {
                country: 'DE',
                items: [
                    createItem('Dragon waffles', 20, 2)
                ]
            }).then(result => {
                expect(isFakeFetchCalled).toBe(true)
            })
        })
    })
})
