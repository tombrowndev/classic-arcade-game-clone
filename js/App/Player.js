// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.reset();
    this.sprite = 'images/char-boy.png';
};

// Update the players position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    if(this.y < 50 && this.won === 0) {
        win();
        this.won = 1;
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handles movement of the player
Player.prototype.handleInput = function(key) {
    switch(key) {
        case 'up':
            if(this.y > 0) this.y -= 80;
            break;
        case 'right':
            if(this.x < 400) this.x += 100;
            break;
        case 'down':
            if(this.y < 380) this.y += 80;
            break;
        case 'left':
            if(this.x > 0) this.x -= 100;
            break;
    }
};

// Reset the player position
Player.prototype.reset = function() {
    this.x = 100;
    this.y = 300;
    this.won = 0;
}