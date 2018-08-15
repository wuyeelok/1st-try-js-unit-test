const checkForShip = (player, coordinates) => {
    //  console.log(`coordinates is: ${coordinates}`);
    // let shipPresent;
    //  let ship;

    const shipPresent = player.ships.map(ele => {
        //  console.log(`ele.locations is: ${ele.locations}`)

        const shipPresent = ele.locations.filter(actualCoordinate => {
            //  console.log(`actualCoordinate is: ${actualCoordinate}`)
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);           
        })[0];
        //  console.log(`shipPresent: ${shipPresent}`);
        if(!shipPresent) {
            return false
        } else {
            return true
        }
    }).reduce((prev, curr) => {
        return prev || curr
    }, false)

    return shipPresent    
    
}

module.exports.checkForShip = checkForShip; 