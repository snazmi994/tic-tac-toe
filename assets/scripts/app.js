const events = require('./auth/events')
$(() => {
  // your JS code goes here
  $('#sign-out-button').hide()
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-button').on('click', events.onSignOut)
})
