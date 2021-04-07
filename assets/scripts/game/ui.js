'use strict'

const store = require('./../store.js')


const onCreateGameSuccess = function () {
  $('#new-message').text('Start Game!')
  $('#sign-up').hide()
  $('#sign-in').hide()

}

const onCreateGameFailure = function () {
    $('#message').text('No Pass!')
}



module.exports = {
  createGameSuccessful,
  createGameFailure,



}
