var ball;
var pipes = []
var shift = false;
var score = 0;

function setup() {
    createCanvas(400, 600);
    ball = new Ball();
    pipes.push(new Pipe());
}

function draw(){
    background(0);
    ball.update();
    ball.show();

    for(let pipe in pipes) {
        pipes[pipe].show();
        pipes[pipe].update();
        if(pipes[pipe].offScreen()) {
            shift = true;
        }
        if(pipes[pipe].hit(ball)) {
            score = 0;
        }
        if(pipes[pipe].crossedBall(ball)) {
            score++;
        }
        if(pipes[pipe].crossedOffset()) {
            pipes.push(new Pipe());
        }
    }

    if(shift) {
        pipes.shift();
        shift = false;
    }
    fill(255);
    textSize(32);
    text(score, 350, 30);
}

function keyPressed() {
    if(key == ' ') {
        ball.up();
    }
}