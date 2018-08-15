const checkForShip = (player, coordinates) => {
    //  console.log(`coordinates is: ${coordinates}`);
    // let shipPresent;
    //  let ship;

    const shipPresent = player.ships.filter(ship => {
        
        const shipPresent = ship.locations.filter(actualCoordinate => {
            //  console.log(`actualCoordinate is: ${actualCoordinate}`)
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);           
        })[0];
        //  console.log(`shipPresent: ${shipPresent}`);
        if(!shipPresent) {
            return false
        } else {
            return true
        }
    })

    if(shipPresent !== undefined && shipPresent.length > 0) {
        return shipPresent[0]
    } else {
        return false;
    }
       
    
}

module.exports.checkForShip = checkForShip; 


const damageShip = (ship, coordinates) => {
    ship.damage.push(coordinates)
} 

module.exports.damageShip = damageShip;

const fire = (player, coordinates) => {
    const ship = checkForShip(player, coordinates);
    
    if(ship) {
        damageShip(ship, coordinates)
    }
}

module.exports.fire = fire;