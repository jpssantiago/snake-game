const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const snake = new Snake();

const update = () => {}

const draw = () => {
    context.font = '20px Arial';
    context.fillStyle = '#00FF42';
    context.fillText(`Score: ${snake.getPoints()}`, 10, 25);
}

const show = () => {
    update();
    draw();
}

const gameLoop = () => {
    setInterval(show, 1000 / 15); // 15 is the FPS.
}

window.onload = () => {
    gameLoop();
}