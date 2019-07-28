class lobby{
    constructor(players,hostIp){
        this.hostIp = hostIp
        this.players = players
        this.roundNo = 0;
        this.clientJson = function(seed){
            return{
                players:this.players,
                roundNo:this.roundNo,
                seed:hashCode(seed)            }
        }
    }
}

function hashCode(str){
            var hash = 0;
            if (str.length == 0) return hash;
            for (i = 0; i < str.length; i++) {
                char = str.charCodeAt(i);
                hash = ((hash<<5)-hash)+char;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash
        }

module.exports = lobby
