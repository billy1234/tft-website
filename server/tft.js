const importer = require('./champListImporter');
const championMap = importer.getHerosSingle();
const costMap = importer.getMap('cost', championMap);
const classMap = importer.getMap('class', championMap);
const originMap = importer.getMap('origin', championMap);
importer.getCompleteHeros(championMap, classMap, originMap);


const getCost = (cost,amount,seed) => {
    if (!(cost in costMap)) throw Error(`${cost} not in ${JSON.stringify(costMap)}`)
    rngSeed = seed;
    const posibilities = Object.keys(costMap[cost]);
    const result = [];
    for(i =0; i < amount; i++) {
        const id = posibilities.splice(Math.floor(seededRandom() * posibilities.length),1)[0];
        result.push(costMap[cost][id]);
    }
    return result;
}

const getByCost = (amount,seed) => {
    return {
        one: getCost(1,amount,seed),
        two: getCost(2,amount,seed + 10),
        three: getCost(3,amount,seed + 20)
    }
}

var rngSeed = 1;
const seededRandom = () => {
    var x = Math.sin(rngSeed++) * 10000;
    return x - Math.floor(x);
}

module.exports = {
    getByCost
};