let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 300;

let sprite = new Image();
sprite.src = "./images/sprite.png";

let assets = {
  base: {
    width: 1200,
    height: 19,
    originX: 0,
    originY: 51
  },

  dinoRightLegUp: {
    width: 40,
    height: 43,
    originX: 938,
    originY: 4
  },

  dinoLeftLegUp: {
    width: 40,
    height: 43,
    originX: 982,
    originY: 4
  },

  dinoStraight: {
    width: 40,
    height: 43,
    originX: 850,
    originY: 4
  },

  dinoNoeyes: {
    width: 40,
    height: 43,
    originX: 894,
    originY: 4
  },

  dinoFrozen: {
    width: 40,
    height: 43,
    originX: 1070,
    originY: 4
  },

  gameOver: {
    width: 191,
    height: 11,
    originX: 655,
    originY: 15
  },

  cloud: {
    width: 46,
    height: 13,
    originX: 86,
    originY: 2
  },

  restart: {
    width: 34,
    height: 30,
    originX: 3,
    originY: 3
  },

  nums: [
    // 0
    {
      width: 9,
      height: 11,
      originX: 655,
      originY: 2
    },
    // 1
    {
      width: 9,
      height: 11,
      originX: 665,
      originY: 2
    },
    // 2
    {
      width: 9,
      height: 11,
      originX: 675,
      originY: 2
    },
    // 3
    {
      width: 9,
      height: 11,
      originX: 685,
      originY: 2
    },
    // 4
    {
      width: 9,
      height: 11,
      originX: 695,
      originY: 2
    },
    // 5
    {
      width: 9,
      height: 11,
      originX: 705,
      originY: 2
    },
    // 6
    {
      width: 9,
      height: 11,
      originX: 715,
      originY: 2
    },
    // 7
    {
      width: 9,
      height: 11,
      originX: 725,
      originY: 2
    },
    // 8
    {
      width: 9,
      height: 11,
      originX: 735,
      originY: 2
    },
    // 9
    {
      width: 9,
      height: 11,
      originX: 745,
      originY: 2
    },
  ],

  // Total: 12
  smallCactus: [
    // 1
    {
      width: 15,
      height: 33,
      originX: 229,
      originY: 3
    },
    // 3
    {
      width: 15,
      height: 33,
      originX: 263,
      originY: 3
    },
    // 5
    {
      width: 15,
      height: 33,
      originX: 297,
      originY: 3
    },
    // 12
    {
      width: 32,
      height: 33,
      originX: 229,
      originY: 3
    },
    // 23
    {
      width: 32,
      height: 33,
      originX: 246,
      originY: 3
    },
    // 34
    {
      width: 32,
      height: 33,
      originX: 263,
      originY: 3
    },
    // 45
    {
      width: 32,
      height: 33,
      originX: 280,
      originY: 3
    },
    // 56
    {
      width: 32,
      height: 33,
      originX: 297,
      originY: 3
    },
    // 123
    {
      width: 49,
      height: 33,
      originX: 229,
      originY: 3
    },
    // 234
    {
      width: 49,
      height: 33,
      originX: 246,
      originY: 3
    },
    // 345
    {
      width: 49,
      height: 33,
      originX: 263,
      originY: 3
    },
    // 456
    {
      width: 49,
      height: 33,
      originX: 280,
      originY: 3
    },
  ],

  // Total: 6
  bigCactus: [
    // 1
    {
      width: 23,
      height: 48,
      originX: 333,
      originY: 3
    },
    // 3
    {
      width: 23,
      height: 48,
      originX: 383,
      originY: 3
    },
    // 12
    {
      width: 47,
      height: 48,
      originX: 333,
      originY: 3
    },
    // 23
    {
      width: 48,
      height: 48,
      originX: 358,
      originY: 3
    },
    // 34
    {
      width: 47,
      height: 48,
      originX: 383,
      originY: 3
    },
    // 4567
    {
      width: 73,
      height: 48,
      originX: 408,
      originY: 3
    }
  ]
};

let config = {
  moveLeftSpeed: 6,
  stuffIntoGround: 15
};

let computedConfig = {
  baseY: canvas.height - assets.base.height,
  dinoY: canvas.height - assets.base.height - assets.dinoLeftLegUp.height + config.stuffIntoGround,
  scoreX: canvas.width - 70,
  gameOverX: canvas.width / 2 - assets.gameOver.width / 2,
  restartX: canvas.width / 2 - assets.restart.width / 2,
  coverX: assets.dinoStraight.width,
  coverY: canvas.height - assets.base.height,
  coverWidth: canvas.width - assets.dinoStraight.width,
  coverHeight: assets.base.height
};

document.body.onload = function () {
  let gameArea = new GameArea();
  gameArea.startWaitting();
};