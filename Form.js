class Form {
    constructor() {
        this.input = createInput("Input");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.title = createElement("h2");
        this.button = createButton("RESET");
    }

    hide() {
        this.input.hide();
        this.title.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display() {
        this.title.html("SNAKE.IO");
        this.title.position(displaywidth / 2 - 50, 0);

        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);
        this.reset.position(displayWidth - 100, 20);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            playerObj.name = this.input.value();
            playerCount += 1;
            playerObj.index = playerCount;
            playerObj.update();
            playerObj.updateCount(playerCount);
            this.greeting.html("HELLO" + playerObj.name)
            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
        });

        this.reset.mousePressed(() => {
            playerObj.updateCount(0);
            gameObj.update(0);
        });

    }

}