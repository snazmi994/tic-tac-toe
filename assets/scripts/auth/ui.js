
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


const onCreateGameSuccess = function () {
  $('#message').text('Game Started!')
   $('#game-board').show()

}

const onCreateGameFailure = function () {
  $('#message').text('Load Error')
}

const onBlockClickSuccess = function () {
  $('#message').text('Player X Turn')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onCreateGameSuccess,
  onCreateGameFailure,
  onBlockClickSuccess

}
