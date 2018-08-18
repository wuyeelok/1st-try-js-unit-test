const functions = require('../js/functions')

describe('functions object method:', () => {
    test('Adds 2 + 2 to equal 4', () => {
        expect(functions.add(2, 2)).toBe(4)
    })

    test('Adds 2 + 2 to NOT equal 5', () => {
        expect(functions.add(2,2)).not.toBe(5)
    })
    
    
})
