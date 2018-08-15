const expect = require('chai').expect

describe('checkForShip', () => {
    const checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('should correctly report no ship at a given players coordinate', () => {

        const player = {
            ships: [
                {
                    locations: [
                        [0, 0]
                    ]
                }
            ]
        }

        expect(checkForShip(player, [9, 9])).to.be.false
    })

    it('should correctly report a ship at a given players coordinate', () => {

        const player = {
            ships: [
                {
                    locations: [
                        [0, 0]
                    ]
                }
            ]
        }

        expect(checkForShip(player, [0, 0])).to.be.true
    })

    it('should handle ships located at more than one coordinate', () => {

        const player = {
            ships: [
                {
                    locations: [
                        [0, 0],
                        [0, 1]
                    ]
                }
            ]
        }

        expect(checkForShip(player, [0, 0])).to.be.true
        expect(checkForShip(player, [0, 1])).to.be.true
        expect(checkForShip(player, [9, 9])).to.be.false
    })
})