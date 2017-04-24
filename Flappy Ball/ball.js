function Ball() {
    this.x = 60;
    this.y = height/2;

    this.gravity = 0.5;
    this.velocity = 0;
    this.lift = -17;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 20, 20);
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // Stop when bird reaches bottom
        if(this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        // Stop when bird reaches top
        if(this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    this.up = function() {
        this.velocity += this.lift;
    }
}