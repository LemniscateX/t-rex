class Cactus {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  draw() {
    ctx.drawImage(sprite, this.image.originX, this.image.originY, this.width, this.height,
      this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= config.moveLeftSpeed;
  }
}