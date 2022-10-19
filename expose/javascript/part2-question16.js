function printElements(stats) {
    for (let stat in stats) {
        if (stat[0] === 'r' || (stats[stat] % 2 != 0)) {
            console.log(stats[stat]);
        }
    }
}
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
printElements(statistics);