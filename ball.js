class ball {
    constructor(x, y, radius) {
        var options = {
            'restitution': 0.8,
            'friction': 1.2,
            'density': 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
      this.body = Bodies.ellispe(100,450, 25, options)
      World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        translate(pos.x, pos.y)  
        fill(255);
        stroke('green');
        ellispe(0, 0, this.radius, this.radius);
    }

}