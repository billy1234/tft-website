const exportData = function (data) {
    result = new Array();
        for(i =0; i < data.length; i++){
            dat = data[i].split(' ');
            result.push( {
                name:dat[0],
                type1:dat[2],
                type2:dat[4],
                cost:dat[6],
            });
        }
    return result;
} 

trim = () => {
    data = [
        {
          "name": "Aatrox",
          "type1": "Demon",
          "type2": "Blademaster",
          "cost": "cost3"
        },
        {
          "name": "Ahri",
          "type1": "Wild",
          "type2": "Sorcerer",
          "cost": "cost2"
        },
        {
          "name": "Akali",
          "type1": "Ninja",
          "type2": "Assassin",
          "cost": "cost4"
        },
        {
          "name": "Anivia",
          "type1": "Glacial",
          "type2": "Elementalist",
          "cost": "cost5"
        },
        {
          "name": "Ashe",
          "type1": "Glacial",
          "type2": "Ranger",
          "cost": "cost3"
        },
        {
          "name": "Aurelion",
          "type1": "Dragon",
          "type2": "Sorcerer",
          "cost": "cost4"
        },
        {
          "name": "Blitzcrank",
          "type1": "Robot",
          "type2": "Brawler",
          "cost": "cost2"
        },
        {
          "name": "Brand",
          "type1": "Demon",
          "type2": "Elementalist",
          "cost": "cost4"
        },
        {
          "name": "Braum",
          "type1": "Glacial",
          "type2": "Guardian",
          "cost": "cost2"
        },
        {
          "name": "Chogath",
          "type1": "Void",
          "type2": "Brawler",
          "cost": "cost4"
        },
        {
          "name": "Darius",
          "type1": "Imperial",
          "type2": "Knight",
          "cost": "cost1"
        },
        {
          "name": "Draven",
          "type1": "Imperial",
          "type2": "Blademaster",
          "cost": "cost4"
        },
        {
          "name": "Elise",
          "type1": "Demon",
          "type2": "Shapeshifter",
          "cost": "cost1"
        },
        {
          "name": "Evelynn",
          "type1": "Demon",
          "type2": "Assassin",
          "cost": "cost3"
        },
        {
          "name": "Fiora",
          "type1": "Noble",
          "type2": "Blademaster",
          "cost": "cost1"
        },
        {
          "name": "Pirate",
          "type1": "Gunslinger",
          "type2": "Blademaster",
          "cost": "cost3"
        },
        {
          "name": "Garen",
          "type1": "Noble",
          "type2": "Knight",
          "cost": "cost1"
        },
        {
          "name": "Wild",
          "type1": "Yordle",
          "type2": "Shapeshifter",
          "cost": "cost4"
        },
        {
          "name": "Graves",
          "type1": "Pirate",
          "type2": "Gunslinger",
          "cost": "cost1"
        },
        {
          "name": "Karthus",
          "type1": "Phantom",
          "type2": "Sorcerer",
          "cost": "cost5"
        },
        {
          "name": "Kassadin",
          "type1": "Void",
          "type2": "Sorcerer",
          "cost": "cost1"
        },
        {
          "name": "Katarina",
          "type1": "Imperial",
          "type2": "Assassin",
          "cost": "cost3"
        },
        {
          "name": "Kayle",
          "type1": "Noble",
          "type2": "Knight",
          "cost": "cost5"
        },
        {
          "name": "Ninja",
          "type1": "Yordle",
          "type2": "Elementalist",
          "cost": "cost3"
        },
        {
          "name": "Khazix",
          "type1": "Void",
          "type2": "Assassin",
          "cost": "cost1"
        },
        {
          "name": "Kindred",
          "type1": "Phantom",
          "type2": "Ranger",
          "cost": "cost4"
        },
        {
          "name": "Leona",
          "type1": "Noble",
          "type2": "Guardian",
          "cost": "cost4"
        },
        {
          "name": "Lissandra",
          "type1": "Glacial",
          "type2": "Elementalist",
          "cost": "cost2"
        },
        {
          "name": "Lucian",
          "type1": "Noble",
          "type2": "Gunslinger",
          "cost": "cost2"
        },
        {
          "name": "Lulu",
          "type1": "Yordle",
          "type2": "Sorcerer",
          "cost": "cost2"
        },
        {
          "name": "Miss",
          "type1": "Pirate",
          "type2": "Gunslinger",
          "cost": "cost5"
        },
        {
          "name": "Mordekaiser",
          "type1": "Phantom",
          "type2": "Knight",
          "cost": "cost1"
        },
        {
          "name": "Morgana",
          "type1": "Demon",
          "type2": "Sorcerer",
          "cost": "cost3"
        },
        {
          "name": "Nidalee",
          "type1": "Wild",
          "type2": "Shapeshifter",
          "cost": "cost1"
        },
        {
          "name": "Poppy",
          "type1": "Yordle",
          "type2": "Knight",
          "cost": "cost3"
        },
        {
          "name": "Pyke",
          "type1": "Pirate",
          "type2": "Assassin",
          "cost": "cost2"
        },
        {
          "name": "RekSai",
          "type1": "Void",
          "type2": "Brawler",
          "cost": "cost2"
        },
        {
          "name": "Rengar",
          "type1": "Wild",
          "type2": "Assassin",
          "cost": "cost3"
        },
        {
          "name": "Sejuani",
          "type1": "Glacial",
          "type2": "Knight",
          "cost": "cost4"
        },
        {
          "name": "Shen",
          "type1": "Ninja",
          "type2": "Blademaster",
          "cost": "cost2"
        },
        {
          "name": "Shyvana",
          "type1": "Dragon",
          "type2": "Shapeshifter",
          "cost": "cost3"
        },
        {
          "name": "Imperial",
          "type1": "Demon",
          "type2": "Shapeshifter",
          "cost": "cost5"
        },
        {
          "name": "Tristana",
          "type1": "Yordle",
          "type2": "Gunslinger",
          "cost": "cost1"
        },
        {
          "name": "Varus",
          "type1": "Demon",
          "type2": "Ranger",
          "cost": "cost2"
        },
        {
          "name": "Vayne",
          "type1": "Noble",
          "type2": "Ranger",
          "cost": "cost1"
        },
        {
          "name": "Veigar",
          "type1": "Yordle",
          "type2": "Sorcerer",
          "cost": "cost3"
        },
        {
          "name": "Volibear",
          "type1": "Glacial",
          "type2": "Brawler",
          "cost": "cost3"
        },
        {
          "name": "Warwick",
          "type1": "Wild",
          "type2": "Brawler",
          "cost": "cost1"
        },
        {
          "name": "Yasuo",
          "type1": "Exile",
          "type2": "Blademaster",
          "cost": "cost5"
        },
        {
          "name": "Zed",
          "type1": "Ninja",
          "type2": "Assassin",
          "cost": "cost2"
        },
        {
          "name": "Twisted",
          "type1": "Pirate",
          "type2": "Sorcerer",
          "cost": "cost2"
        }
      ]


    for(i =0; i < data.length; i++){
        data[i].cost = new RegExp("\\d+").exec(data[i].cost)[0]
    }}
