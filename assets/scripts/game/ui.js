'use strict'

const store = require('./../store.js')


const onCreateGameSuccess = function () {
  $('#message').text('Start Game!')

}

const onCreateGameFailure = function () {
    $('#message').text('No Pass!')
}



module.exports = {
  createGameSuccessful,
  createGameFailure,

}
