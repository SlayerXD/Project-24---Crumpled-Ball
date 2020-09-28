class Box {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    display() {
        fill(0,0,255);
        stroke('blue');
        rect(this.x, this.y, this.width, this.height);
    }
}