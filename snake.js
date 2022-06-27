const MOVEMENT_INCREMENT = 20;

class Snake {
    constructor(x, y, maxX, maxY, movement = 'down') {
        this.maxX = maxX;
        this.maxY = maxY;
        this.movement = movement;
        this.points = 0;
        this.tail = [{ x, y }];
    }

    getPoints() {
        return this.points;
    }

    move() {
        let rect;

        switch (this.movement) {
            case 'up':
                rect = {
                    x: this.tail[this.tail.length - 1].x,
                    y: this.tail[this.tail.length - 1].y - MOVEMENT_INCREMENT,
                };
                break;
            case 'right':
                rect = {
                    x: this.tail[this.tail.length - 1].x + MOVEMENT_INCREMENT,
                    y: this.tail[this.tail.length - 1].y,
                };
                break;
            case 'down':
                rect = {
                    x: this.tail[this.tail.length - 1].x,
                    y: this.tail[this.tail.length - 1].y + MOVEMENT_INCREMENT,
                };
                break;
            case 'left':
                rect = {
                    x: this.tail[this.tail.length - 1].x - MOVEMENT_INCREMENT,
                    y: this.tail[this.tail.length - 1].y,
                };
                break;
        }

        if (rect.y < 0) rect.y = this.maxY;
        if (rect.y > this.maxY) rect.y = 0;

        if (rect.x < 0) rect.x = this.maxX;
        if (rect.x > this.maxX) rect.x = 0;

        this.tail.shift();
        this.tail.push(rect);
    }

    draw(context) {
        context.fillStyle = '#FFFFFF';

        for (let i = 0; i < this.tail.length; i++) {
            const x = this.tail[i].x;
            const y = this.tail[i].y;

            context.fillRect(x, y, 20 - 2.5, 20 - 2.5);
        }
    }

    setMovement(movement) {
        const oldMovement = this.movement;

        if (this.tail.length > 1) {
            switch (movement) {
                case 'up':
                    if (oldMovement == 'down') return;
                    break;
                case 'right':
                    if (oldMovement == 'left') return;
                    break;
                case 'down':
                    if (oldMovement == 'up') return;
                    break;
                case 'left':
                    if (oldMovement == 'right') return;
                    break;
            }
        }

        this.movement = movement;
    }

    hasCollidedWithTail() {
        if (this.tail.length == 1) return false;

        const x = this.tail[this.tail.length - 1].x;
        const y = this.tail[this.tail.length - 1].y;

        for (let i = this.tail.length - 2; i >= 0; i--) {
            if (x == this.tail[i].x && y == this.tail[i].y) {
                return true;
            }
        }

        return false;
    }

    hasEaten(apple) {
        const x = this.tail[this.tail.length - 1].x;
        const y = this.tail[this.tail.length - 1].y;

        if (x == apple.x && y == apple.y) {
            this.points += 1;
            this.tail[this.tail.length] = {x: apple.x, y: apple.y};
            return true;
        }

        return false;
    }
}