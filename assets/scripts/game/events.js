'use strict'

/)
const ui = require('./ui')
const api = require('./api')
const store = require('./../store.js')


}

const onCreateGame = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createGame(data)
    .then(ui.onCreateGameuccess)
    .catch(ui.onCreateGameFailure)
}




module.exports = {
onCreateGame,

}
