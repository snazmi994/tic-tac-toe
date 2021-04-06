const events = require('./auth/events')
$(() => {
  // your JS code goes here

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#start-game').on('submit', events.onStartGame)

})
