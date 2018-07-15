// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.reset();
    this.delay = getRandom(0, 6);
    this.moving = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// This is used to either initialor reset ane nemy whe it loops back to the left.
Enemy.prototype.reset = function() {
    this.x = -100;
    this.y = this.getNewVerticalPosition();
    this.speed = getRandom(1, 3) * 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.moving) {
        if(this.x > 500) {
            this.reset();
        }
        this.x += this.speed * dt;
    } else {
        this.startMoving();
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Sets which vertical position (path) an enemy will be on.
// Used to initialise the enemy and also when the enemy loops back to the start.
Enemy.prototype.getNewVerticalPosition = function() {
    let _verticalPosition = [60, 140, 220];
    return _verticalPosition[getRandom(0,3)];
};

// Get going!
Enemy.prototype.startMoving = function() {
    return new Promise(resolve => {
        setTimeout(() => {
            this.moving = 1;
        }, this.delay * 1000);
    });
};