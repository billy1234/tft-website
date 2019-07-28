const lobby = require('./lobby')
const lobbies = {}
const lobbyIdLength = 4

const lobbyExists = async function(id){
    return (id in lobbies);
}

const makeid = function(depth = 0) {
    if (depth > 100) throw "No Room For Lobby" 

    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < lobbyIdLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return ((makeid in lobbies)? 
        makeid(depth ++): 
        result);
}

const createLobby = async function(players,hostId){
    id = makeid();
    lobbies[id] = new lobby(players,hostId);
    console.log(id);
    return id;
}

const incrementTurn = async function (id){
    if (!lobbyExists(id)) return false;
    lobbies[id].roundNo++;
    return true;
}

const getLobby = async function(id){
    if (!lobbyExists(id)) return false;
    return lobbies[id];
}

const deleteLobby = async function(id){
    if (!lobbyExists(id)) return false;
    lobbies[id] = null;
    return true;
}

module.exports = {
    createLobby,
    lobbyExists,
    incrementTurn,
    getLobby,
    deleteLobby
}