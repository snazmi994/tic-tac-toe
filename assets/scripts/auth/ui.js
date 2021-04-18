'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Signed Up Successfully')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-game').show()
  $('#sign-out').show()

}

const onSignInFailure = function () {
  $('#message').text('Sign in failed')
}

const onSignOutSuccess = function () {
  $('#message').text('I Get It.')
  $('#create-game').hide()
  $('#sign-in').show()
  store.user = null
}


const onCreateGameSuccess = function (response) {
  store.game = response.game
  console.log('store.game', store.game)
  $('#message').text('Game Started!')
  $('#game-board').show()
}

const onCreateGameFailure = function () {
  $('#message').text('Load Error')
}


const onBlockClickSuccess = function (response) {
  store.game.cells = response.game
  console.log(store.game.cells)
  let winner
    if ((store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') ||
        (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') ||
        (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') ||
        (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') ||
        (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') ||
        (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') ||
        (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') ||
        (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x')) {
      winner = 'x'
      $('#message').text('X Wins!')
    } else if ((store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') ||
        (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') ||
        (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o') ||
        (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o') ||
        (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o') ||
        (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o') ||
        (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') ||
        (store.game.cells[2] === 'o' && store.game.cells[4] === 'o' && store.game.cells[6] === 'o')) {
      winner = 'o'
      $('#message').text('Wins!')
    } else {
       $('#message').text('Tie Game!')
  }
}

const onBlockClickFailure = function () {
  console.log('failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onCreateGameSuccess,
  onCreateGameFailure,
  onBlockClickSuccess,
  onBlockClickFailure
}
