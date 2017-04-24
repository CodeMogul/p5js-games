var snake;
var pixSize = 20;
var food;
var score = 0;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    food = new Food();
    frameRate(10);
}

function draw() {
    background(51);
    snake.dead();
    snake.update();
    snake.show();

    if(snake.eat(food)) {
        food.update();
    }

    fill(255,255,0);
    rect(food.x, food.y, pixSize, pixSize);

    fill(255);
    textSize(32);
    text(snake.total, 550, 30);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    }
    else if(keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    }
    else if(keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    }
    else if(keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    }
}