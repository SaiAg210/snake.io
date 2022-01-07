class Game {
  constuctor() {

  }

  getState() {
    var gameStateRef = databaseObj.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }

  update(state) {
    databaseObj.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      playerObj = new Player();
      var playerCountRef = await databaseObj.ref('playerCount').once("value ");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        playerObj.getCount();
      }
      form = new Form();
      form.display();
    }
    snake1 = createSprite(100, 200);
    snake2 = createSprite(100, 200);
    snakes = [snake1, snake2];
  }

  play() {

    form.hide();

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      background(rgb(198, 135, 103));
      image(bg, -displayHeight * 4, displayWidth, displayHeight * 5);
      var index = 0;
      var x = 175;
      var y = 100;

      for (var plr in allPlayers) {
        index = index + 1;
        x = x + 200;
        y = y + 150;
        snakes[index - 1].x = x;
        snakes[index - 1].y = y;

        if (index === players.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
          snakes[index - 1].shapeColor = "blue";
        }
      }

    }

    if (keyIsDown(UP_ARROW) && playerObj.index !== null) {
      playerObj.distance += 10
      playerObj.update();
    }





    drawSprites();
  }
  end() {
    console.log("Game Ended");
    console.log(playerObj.rank);
  }
}