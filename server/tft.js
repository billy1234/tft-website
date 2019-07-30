

const importer = require('./champListImporter');
const championMap = importer.getHerosSingle();
console.log(championMap);
const costMap = importer.getMap('cost', championMap);
const classMap = importer.getMap('class', championMap);
const originMap = importer.getMap('origin', championMap);
importer.getCompleteHeros(championMap, classMap, originMap);

module.exports = {
   championMap,
   costMap,
   classMap,
   originMap
};