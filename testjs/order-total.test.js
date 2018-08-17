const createItem = require('../js/order-total').createItem
const orderTotal = require('../js/order-total').orderTotal

describe('orderTotal', () => {
    describe('Quantity Related', () => {
        it('Quantity', () => {
            expect(orderTotal({
                items: [
                    createItem('Dragon candy', 2, 3)
                ]
            })).toBe(6)
        })
        it('No Quantity Specified', () => {
            expect(orderTotal({
                items: [
                    createItem('Dragon candy', 3)
                ]
            })).toBe(3)
        })
    })

    describe('Happy Path Related', () => {
        it(' Happy path Test Case 1', () => {
            expect(orderTotal({
                items: [
                    createItem('Dragon food', 8, 1),
                    createItem('Dragon cage (small)', 800, 1)
                ]
            })).toBe(808)
        })
        it(' Happy path Test Case 2', () => {
            expect(orderTotal({
                items: [
                    createItem('Dragon collar', 20, 1),
                    createItem('Dragon chew toy', 40, 1)
                ]
            })).toBe(60)
        })
    })
})
