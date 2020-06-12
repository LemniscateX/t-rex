class Score {
  constructor(num, x, y) {
    this.num = num;
    this.x = x;
    this.y = y;
    this.width = assets.nums[0].width;
    this.height = assets.nums[0].height;
  }

  draw() {
    let str = "0".repeat(5 - this.num.toString().length) + this.num.toString();
    for (let i = 0; i < str.length; i++) {
      let image = assets.nums[parseInt(str[i])];
      ctx.drawImage(sprite, image.originX, image.originY, this.width, this.height,
        this.x + i * (this.width + 2), this.y, this.width, this.height);
    }
  }
}