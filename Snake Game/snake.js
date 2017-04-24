function Snake() {
    this.x = 0;
    this.y = 0;
    this.xVelocity = 1;
    this.yVelocity = 0;
    this.total = 0;
    this.tail = [];
    this.xDir = 1;
    this.yDir = 0;

    this.update = function() {
        this.x += this.xVelocity*pixSize;
        this.y += this.yVelocity*pixSize;

        if(this.x >= width || this.y >= height){
            this.total = 0;
            this.tail = [];
        }
        

        this.x = constrain(this.x, 0, width - pixSize);
        this.y = constrain(this.y, 0, height - pixSize);

        if(this.total === this.tail.length - 1){
            this.tail.shift();
        }
        this.tail.push(createVector(this.x, this.y));
    }

    this.show = function() {
        for(var i = 0 ; i < this.tail.length ; i ++) {
            fill(255);
            rect(this.tail[i].x, this.tail[i].y, pixSize, pixSize);
        }
    }

    this.setDir = function(x, y) {
        if((this.xDir === 1 && x === -1) || (this.xDir === -1 && x === 1)) return;
        if((this.yDir === 1 && y === -1) || (this.yDir === -1 && y === 1)) return;
        this.xVelocity = this.xDir = x;
        this.yVelocity = this.yDir = y;
    }

    this.eat = function(food) {
        var d = dist(this.x, this.y, food.x, food.y);
        if(d < 2) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.dead = function() {
        for(var i = 0 ; i < this.tail.length-1; i ++) {
            var d = dist(this.tail[i].x, this.tail[i].y, this.x, this.y);
            if(d < 2) {
                this.total = 0;
                this.tail = [];
            }
        }
    }
}