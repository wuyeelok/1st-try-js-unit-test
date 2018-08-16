const expect = require('chai').expect

describe('checkForShip', () => {
    const checkForShip = require('../game_logic/ship_methods').checkForShip;

    let player;

    before(() => {
        player = {
            ships: [
                {
                    locations: [
                        [0, 0],
                        [0, 1]
                    ]
                },
                {
                    locations: [
                        [1, 0],
                        [1, 1]
                    ]
                },
                {
                    locations: [
                        [2, 0],
                        [2, 1],
                        [2, 2],
                        [2, 3]
                    ]
                }
            ]
        }

    })

    it('should correctly report no ship at a given players coordinate', () => {
        expect(checkForShip(player, [9, 9])).to.be.false
    })

    it('should correctly report a ship at a given players coordinate', () => {
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
    })

    it('should handle ships located at more than one coordinate', () => {
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0])
        expect(checkForShip(player, [9, 9])).to.be.false
    })

    it('should handle checking multiple ships', () => {
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0])

        expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1])
        expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1])

        expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2])

        expect(checkForShip(player, [9, 9])).to.be.false
    })
})

describe('damageShip', () => {
    const damageShip = require('../game_logic/ship_methods').damageShip

    it('should register damage on a given ship at a given location', () => {
        const ship = {
            locations: [
                [0, 0]
            ],
            damage: []
        }

        damageShip(ship, [0, 0])

        expect(ship.damage).to.not.be.empty
        expect(ship.damage[0]).to.deep.equal([0, 0])
    })
})

describe('fire', () => {

    const fire = require('../game_logic/ship_methods').fire;
    let player;

    beforeEach(() => {
        player = {
            ships: [
                {
                    locations: [
                        [0, 0]                        
                    ],
                    damage: []
                }
            ]
        }
    })

    it('should have no damage to player ship if there is no ship in target location', () => {
        fire(player, [9, 9])
        expect(player.ships.map(ship => ship.damage)[0]).to.be.empty
    })

    it('should have damage to player ship if there is ship in target location', () => {
        fire(player, [0, 0])
        expect(player.ships.map(ship => ship.damage)[0][0]).to.deep.equal([0, 0])
    })



})