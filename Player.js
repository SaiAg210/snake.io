class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.rank = null;
    }

    getCount() {
        var playerCountRef = databaseObj.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        databaseObj.ref('/').update({
            playerCount: count
        })
    }

    update() {
        var playerIndex = "players/player" + this.index;
        databaseObj.ref(playerIndex).set({
            name: this.name
        })
    }

    static getPlayerInfo() {
        var playerInfoRef = databaseObj.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val;
        })
    }


}