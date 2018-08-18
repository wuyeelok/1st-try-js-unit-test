const functions = require('../js/functions')

describe('functions object method:', () => {
    test('Adds 2 + 2 to equal 4', () => {
        expect(functions.add(2, 2)).toBe(4)
    })

    test('Adds 2 + 2 to NOT equal 5', () => {
        expect(functions.add(2,2)).not.toBe(5)
    })
    
    test('Should be null', () => {
        expect(functions.isNull()).toBeNull()
    })

    test('Should be falsy', () => {
        expect(functions.checkValue(null)).toBeFalsy()
    })
    
    test('User should be Brad Traversy object', () => {
        expect(functions.createUser()).toStrictEqual({
            firstName: "Brad", 
            lastName: "Travsery"
        })    
    })

    test('Should be under 1600', () => {
        const load1 = 800;
        const load2 = 800
        expect(functions.add(load1, load2)).toBeLessThanOrEqual(1600)
    })

    // Regex
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/)
    })

    // Arrays
    test('Admin should in usernames', () => {
        usernames = ['john', 'karen', 'admin']
        expect(usernames).toContain('admin')
    })

    test('User fetched name should be Leanne Graham', () => {
        expect.assertions(1)
        return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
    })
})
