const expect = require('chai').expect

// Test Suite
describe('Mocha', () => {
    // Test spc (unit test)
    it('should run our tests using npm', () => {
        expect(true).to.be.ok
    })

    it('dobule check it should run our tests using npm', () => {
        expect(false).to.be.false
    })
})