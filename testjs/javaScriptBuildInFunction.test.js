describe('Test if() behavior', () => {

    let actualResult

    beforeEach(() => {
        actualResult = false
    })

    test('if("") should be equal to false', () => {
        if("") {
            actualResult = true
        } 
        expect(actualResult).toBe(false)
    })

    test('if(0) should be equal to false', () => {
        if(0) {
            actualResult = true
        }
        expect(actualResult).toBe(false)
    })
})