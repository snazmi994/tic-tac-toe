const events = require('./auth/events')
$(() => {
  // your JS code goe here

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#create-game').on('submit', events.onCreateGame)
})
