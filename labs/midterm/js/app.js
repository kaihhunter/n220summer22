//how many frames it takes to move a space invader
let MOVE_INTERVAL = 30;
//how many frames between invader's shots
const SHOT_PAUSE = 300;
//how long the player is invincible after hit
const PLAYER_INVINCIBLE = 60 * 2 - 20;
const scale = 3;

let invaders = [];
let bullets = [],
	invaderBullets = [];
let player;

let invaderImg, invader2Img, spaceshipImg, bullet2Img, barrierImg;
let invaderFont;

let frameCount = 0;
let invaderSpeed = 1;

let playerLives, score, win, streak;

function preload() {
	invaderImg = loadImage("invader.png");
	invader2Img = loadImage("invader2.png");
	spaceshipImg = loadImage("spaceship.png");
	bulletImg = loadImage("bullet.png");
	bullet2Img = loadImage("bullet2.png");

	//"cosmic alien" font
	invaderFont = loadFont("ca.ttf");
}

function setup() {
  console.log(Math.min(500, window.innerWidth));
	createCanvas(Math.min(500, window.innerWidth), Math.min(500, window.innerWidth));
	noSmooth();
	textFont(invaderFont);

	//create barrier image
	barrierImg = createImage(1, 1);
	barrierImg.set(0, 0, color(255, 0, 255));

	//create invaders
	let invWidth = scale * invaderImg.width,
		invHeight = scale * invaderImg.height;

	let x = -(scale * 5 + invWidth) + scale,
		y = scale,
		yidx = 0;
	for (let i = 0; i < 9 * 4; ++i) {
		x += scale * 5 + invWidth;
		if (x >= width - invWidth * 3) {
			y += scale * 5 + invHeight;
			yidx++;
			x = scale;
		}
		invaders.push(new Invader(x, y, invWidth, invHeight, (yidx % 2 == 0) ? invaderImg : invader2Img));
	}

	//create player
	player = new Player(width / 2, height - spaceshipImg.height * scale, spaceshipImg.width * scale, spaceshipImg.height * scale, spaceshipImg);

	playerLives = 2;
	score = streak = 0;
	win = false;

	MOVE_INTERVAL = 30;

	loop();
}