const checkForShip = (player, coordinates) => {
    //  console.log(`coordinates is: ${coordinates}`);
    // let shipPresent;
    //  let ship;

    const shipPresentArray = player.ships.map(ele => {
        //  console.log(`ele.locations is: ${ele.locations}`)

        const shipPresent = ele.locations.filter(actualCoordinate => {
            //  console.log(`actualCoordinate is: ${actualCoordinate}`)
            const result = (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
            //  console.log(`result is ${result}`)
            return result;
        })[0];
        //  console.log(`shipPresent: ${shipPresent}`);
        if(!shipPresent) {
            return false;
        }
    })

    //  console.log(`shipPresentArray is: ${shipPresentArray}`)
    
    if(shipPresentArray !== undefined && shipPresentArray.length > 0) {
        //  console.log(`shipPresentArray.length is ${shipPresentArray.length},shipPresentArray[0] is ${shipPresentArray[0]}`)
        return shipPresentArray[0];
    }
    
}

module.exports.checkForShip = checkForShip; 