class Apple {
    constructor(maxX, maxY) {
        this.maxX = maxX;
        this.maxY = maxY;

        this.generateNewApple();
    }

    generateNewApple() {
        this.x = Math.floor(Math.random() * this.maxX / 20) * 20;
        this.y = Math.floor(Math.random() * this.maxY / 20) * 20;
    }

    draw(context) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, 20, 20);
    }
}