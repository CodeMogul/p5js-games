// A complete pipe from top to bottom
function Pipe() {
    // Gap between upper and lower half
    this.gap = random(100,180);
    // Upper half section of pipe
    this.top = random(height-this.gap-50);
    // Lower half section of pipe
    this.bottom = this.top + this.gap;
    this.x = width;
    // pipe's width
    this.w = 30;
    this.speed = 3;
    // Percentage of screen after which new pipe is generated
    this.offset = width / 2.5;

    this.flagged = false;
    this.gotHit = false;
    this.scored = false;

    this.show= function() {
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.bottom, this.w, height-this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.hit = function(ball) {
        if(ball.x >= this.x && ball.x <= this.x + this.w) {
            if(ball.y >= this.bottom || ball.y <= this.top) {
                this.gotHit = true;
                return true;
            }
        }
        return false;
    }

    this.crossedOffset= function() {
        if((this.x + this.w) < this.offset && !this.flagged) {
            this.flagged = true;
            return true;
        }
        return false;
    }

    this.crossedBall = function(ball) {
        if(this.x + this.w < ball.x && !this.gotHit && !this.scored){
            this.scored = true;
            return true;
        }   
        else return false;
    }

    this.offScreen = function() {
        if(this.x < -this.w) {
            return true;
        }
        return false;        
    }
}