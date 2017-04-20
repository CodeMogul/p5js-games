function Food() {
    this.cols = floor(width/pixSize);
    this.rows = floor(height/pixSize);

    this.x = floor(random(this.cols)) * pixSize;
    this.y = floor(random(this.rows)) * pixSize;

    this.update = function() {
        this.x = floor(random(this.cols)) * pixSize;
        this.y = floor(random(this.rows)) * pixSize;
    }
}