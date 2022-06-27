const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const initialX = (canvas.width / 2) - 20;
const initialY = (canvas.height / 2) - 20;

const snake = new Snake(initialX, initialY, canvas.width, canvas.height);
const apple = new Apple(canvas.width, canvas.height, snake.tail);

const update = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();

    if (snake.hasEaten(apple)) {
        apple.generateNewApple();
    }
}

const drawScore = () => {
    context.font = '20px Arial';
    context.fillStyle = '#00FF42';
    context.fillText(`Score: ${snake.getPoints()}`, 10, 25);
}

const draw = () => {
    snake.draw(context);
    apple.draw(context);
    drawScore();
}

const show = () => {
    update();
    draw();
}

const startGame = () => {
    setInterval(show, 1000 / 15); // 20 is the FPS.
}

window.addEventListener('keydown', e => {
    switch (e.code) {
        case 'ArrowUp':
        case 'KeyW':
            snake.setMovement('up');
            break;
        case 'ArrowRight':
        case 'KeyD':
            snake.setMovement('right');
            break;
        case 'ArrowDown':
        case 'KeyS':
            snake.setMovement('down');
            break;
        case 'ArrowLeft':
        case 'KeyA':
            snake.setMovement('left');
            break;
    }
});

window.onload = () => {
    startGame();
}