var fs = require("fs");
var path = require('path');

const raw = fs.readFileSync(path.join(__dirname,'championList'), "utf8");

const rex = /(?:[\D]+\n){6,}cost\d+\n/gm;

const data = raw.match(rex);

const getHerosSingle = () => {
    return data.reduce(function(map, obj) {
        const result = {};
        const arr = obj.split('\n');
        if(arr[arr.length -1] == '') arr.pop(); //if we matched a new line at the end
        name = arr[0]; //first elem
        result['cost'] = arr[arr.length -1].match(/\d+/)[0];//digits in last elem
        const types = [];
        for(i = 0; 3 + (i*2) < arr.length -1; i++){
            types.push(arr[3 + (i*2)]);
        }
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

const getCompleteHeros  = (dict, classMap, originMap) => {
     for(k in dict){
        elem = dict[k];
        if(elem.additional) {
            for(let i =0; i < elem.additional.length; i++) {
                const e = elem.additional[i];
                if (e in classMap) elem.class.push(e);
                else if (e in originMap) elem.origin.push(e);

            }
            delete elem.additional;
        }
    }
    return dict;
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
