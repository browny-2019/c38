class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;

    }
    getPlayerCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })

    }
    updatePlayerCount(count){
        database.ref('/').update({
            playerCount:count


        })


    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
        
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players')
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val()
        })
    }
    getCarsAtTheEnd(){
        database.ref('carsAtTheEnd').on("value",(data)=>{
            this.rank = data.val()

        })
    }
    updateCarsAtTheEnd(rank){
        database.ref('/').update({
            carsAtTheEnd:rank
        })
    }
}