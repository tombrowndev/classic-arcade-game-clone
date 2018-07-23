'use strict'

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player()
const allEnemies = []
for (let i = 0; i < 5; i++) {
  allEnemies.push(new Enemy())
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  }

  player.handleInput(allowedKeys[e.keyCode])
})

document.addEventListener('click', function (e) {
  e.preventDefault()

  if (e.target.id === 'close-modal') {
    closeModal()
    player.reset()
  }
})

// Checks for player collisions
function checkCollisions () {
  allEnemies.forEach(enemy => {
    if (player.x < enemy.x + 80 && player.x >= enemy.x - 50) {
      if (player.y >= enemy.y - 20 && player.y < enemy.y + 80) {
        player.reset()
      }
    }
  })

  return false
}

// Gets a random number between 2 numbers
function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function win () {
  let mask = createEl('div', 'mask')
  let modal = createEl('div', 'modal')

  modal.innerHTML = '<h1>Congratulations!</h1><p>You have made it to the river :)</p><p><a id="close-modal" href="#">New game</a></p>'

  document.body.prepend(mask)
  document.body.prepend(modal)

  $('#mask, #modal').fadeIn()
}

function closeModal () {
  $('#mask, #modal').fadeOut(function () {
    this.remove()
  })
}

// Returns an element with an id and class
function createEl (type, id) {
  let el = document.createElement(type)

  if (typeof id !== 'undefined') {
    el.id = id
  }

  return el
}
