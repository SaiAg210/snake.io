var bg;
var canvas;
var snake1, snake2;
var gameObj;
var playerObj;
var gameState = 0;
var databaseObj;
var playerCount;
var allPlayers;

function preload() {
  bg = loadImage("bg.jpg");
}


function setup() {
  canvas = createCanvas(5000, 3000);
  databaseObj = firebase.database();
  gameObj = new Game();
  gameObj.getState();
  gameObj.start();
}

function draw() {
  if (playerCount === 2) {
    gameObj.update(1);
  }
  if (gameState === 1) {
    clear();
    gameObj.play();
  }
  if (gameState === 2) {
    gameObj.end();
  }
}