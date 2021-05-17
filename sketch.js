var dataBase,game,player,form,playerCount,gameState = 0;


function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
    game = new Game()
    game.getState();
    game.start()
   
}

function draw(){
   
}


