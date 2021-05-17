class Player{
    constructor(){

    }

    //read the playerCount value from the database
    getCount(){
        dataBase.ref("playerCount").on("value",function(data){
            playerCount= data.val()
        })
    }

    //write the playerCount value to the database
    updateCount(count){
        dataBase.ref("/").update({
            playerCount:count
        })
    }

    //write player name to the database
    updateInfo(name){
        dataBase.ref("player"+playerCount).set({
            name:name
        })
    }
}