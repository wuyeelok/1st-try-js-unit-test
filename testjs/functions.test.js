const functions = require('../js/functions')

describe('functions object method:', () => {
    test('Adds 2 + 2 to equal 4', () => {
        expect(functions.add(2, 2)).toBe(4)
    })
})
