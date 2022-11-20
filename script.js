var ball = document.getElementById('ball');
var player = document.getElementById('player');
let scores = document.getElementById("scores");
let audio = document.getElementById("audio");
let x;
let y;
let x_speed = 2.8;
let y_speed = Math.floor(Math.random() * 3);
let Width = window.innerWidth
let Height = window.innerHeight
if (x_speed == 0) {
	x_speed = -1;
}


setInterval(forward, 1);
addEventListener("keydown", key);
function key(e) {

	if (e.code == "ArrowUp") {

		player.style.top = (parseInt(getComputedStyle(player).top) - 40) + 'px';
	} else if (e.code == "ArrowDown") {
		player.style.top = (parseInt(getComputedStyle(player).top) + 40) + 'px';
	}
}

function forward() {

	let Y = ball.style.top = (parseInt(getComputedStyle(ball).top));
	let X = ball.style.left = (parseInt(getComputedStyle(ball).left));
	let Y_player = player.style.top = (parseInt(getComputedStyle(player).top));

	if (X < 25 && (Y+30 > Y_player && Y < Y_player+150)) {
		x_speed *= -1;
		y_speed += 1;
		scores.innerHTML ++
		audio.play();
	}

	if (X >Width-50 ) {
		x_speed *= -1;
		audio.play();
	}

	if (X < 0) {
		location.reload();
	}

	if (Y+1000 > Width || Y < 0) {
		y_speed *= -1;
		audio.play();
	}

	x = +x_speed;
	y = +y_speed;
	ball.style.left = (parseInt(getComputedStyle(ball).left) + x) + 'px';
	ball.style.top = (parseInt(getComputedStyle(ball).top) + y) + 'px';

}