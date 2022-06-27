class Apple {
    constructor(maxX, maxY, tail) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.tail = tail;

        this.generateNewApple();
    }

    collidesWithSnake(x, y) {
        for (let block of this.tail) {
            if (block.x == x && block.y == y) {
                return true;
            }
        }

        return false;
    }

    generateNewApple() {
        let x, y;
        do {
            x = Math.floor(Math.random() * this.maxX / 20) * 20;
            y = Math.floor(Math.random() * this.maxY / 20) * 20;
        } while (this.collidesWithSnake(x, y));

        this.x = x;
        this.y = y;
    }

    draw(context) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, 20, 20);
    }
}