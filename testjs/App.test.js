const hello = require('../js/App.js').hello

describe('hello', () => {
    it('should output hello', () => {
        expect(hello()).toBe('hello')
    })
})