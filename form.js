class Form{
    constructor(){
     


    }

  display(){
    var title = createElement("h1")
    title.html("Car game")
    title.position(135,40);

    title.style("font-family","Century Gothic")
    var input = createInput("name")
    input.position(130,160)

    var button = createButton("START")
    button.position(200,200);
    button.style("background","blue")
    
    button.mousePressed(function(){
        input.hide()
        button.hide()
        title.hide()
        var name = input.value()

        var greetings = createElement("h2");
        greetings.html("Hello! "+name)
        greetings.position(130,160) 
        
        playerCount++
        player.updateCount(playerCount);
        player.updateInfo(name)
    })
  }    
}