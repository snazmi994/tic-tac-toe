
'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Signed Up Successfully')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()

}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed')
}

const onSignOutSuccess = function () {
  $('#message').text('I Get It.')
  $('#sign-out').hide()
$('#sign-in').show()
  store.user = null
}




module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess

}
