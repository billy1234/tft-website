var fs = require("fs");
var path = require('path');

const raw = fs.readFileSync(path.join(__dirname,'championList'), "utf8");

const rex = /(?:[\D]*\n){6,}cost\d+/gm;

const data = raw.match(rex);

const getHerosSingle = () => {
    return data.reduce(function(map, obj) {
        const result = {};
        const arr = obj.split('\n');

        name = arr[0]; //first elem
        result['cost'] = arr[arr.length -1]; //last elem
        const types = [];
        for(i = 0; 3 + (i*2) < arr.length -1; i++){
            types.push(arr[3 + (i*2)]);
        }
        console.log(types)
        if(types.length == 2){
            result['origin'] = [types[0]];
            result['class'] = [types[1]];
        } else {
            result['origin'] = [types[0]]; //types 0 is allways an origin
            result['class'] = [types[types.length -1]]; //types n is allways a class
            result['additional'] = types.slice(1,types.length -1); //everything not at 0 or N
        }

        map[name] = result;

        return map;
    },{});
}

const getCompleteHeros  = (list, classMap, originMap) => {
     list.keys().forEach((k) =>{
        elem = list[k];
        if(elem.additional) {
            for(e in elem.additional) {
                if (classMap.keys().includes(e)) elem.class.push(e);
                else if (originMap.keys().includes(e)) elem.origin.push(e);

            }
            delete elem.additional;
        }
    });
    return list;
}

const getMap = (primaryKey, championMap) => {
    keys = findUnique(primaryKey, championMap);
    map = {}
    for(k of keys){
        map[k] = [];
    }

    for(k in championMap) {
        map[championMap[k][primaryKey]].push(k);
    }
    return map;
}

const findUnique = (id,championMap) => {
    return new Set(strip(id,championMap));
}

//* finds all values in a column */
const strip = (id,championMap) => {
    result = new Array(championMap.length);
    var i =0;
    for(name in championMap){
        result[i] = championMap[name][id];
        i++;
    }
    return result;
}

module.exports = {
   getHerosSingle,
   getCompleteHeros,
   getMap
}
