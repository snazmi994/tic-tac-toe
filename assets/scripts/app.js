const events = require('./auth/events')
$(() => {
  // your JS code goe here
$('#create-game').hide()

  $('#sign-in').hide()
  $('#sign-out').hide()
 $('#game-board').hide()

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#create-game').on('submit', events.onCreateGame)
  $('#game-board').on('click', events.onGameBoard)
})
