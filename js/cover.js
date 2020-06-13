class Cover {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 25;
  }

  isOutOfScope() {
    return this.x > canvas.width;
  }
}