function Rectangle(width,height){
    this.width = width;
    this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.setCenter = function(Point) {
    this.x = Point.x;
    this.y = Point.y;
}
Rectangle.prototype.draw = function(context){
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.stroke();
}