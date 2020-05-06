function Circle(radius){
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.setCenter = function(Point){
     this.x = Point.x;
     this.y = Point.y;
}
Circle.prototype.draw = function(context){
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.stroke();
}