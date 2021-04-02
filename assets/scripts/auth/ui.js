'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  console.log('sign up failure ran with the data: ', data)
}

const signInSuccess = function (data) {
  console.log('sign in success ran with the data: ', data)
  store.user = data.user
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data: ', data)
}



const signOutSuccess = function () {
  console.log('sign out successful!')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  console.log('sign out failed!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure
}
