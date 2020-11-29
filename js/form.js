class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement('h3');
        this.reset = createButton("reset"); 

    }
    display(){
      
       this.title.html("car racing game");
       this.title.position(displayWidth/2,0);
       this.reset.position(displayWidth-100,100);

       
      
        this.input.position(displayWidth/2,displayHeight/2-80);
        this.button.position(displayWidth/2,displayHeight/2);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            console.log(playerCount);
            player.update();
            player.updatePlayerCount(playerCount)
           this.greeting.html("welcome "+player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);

        })
        this.reset.mousePressed(()=>{
            player.updatePlayerCount(0);
            game.updateGameState(0);
            player.updateCarsAtTheEnd(0);
            database.ref('players').remove();
        })
        
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}