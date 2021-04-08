const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
  .then(ui.onCreateGameSuccess)
  .catch(ui.onCreateGameFailure)
}


const onGameBoard = function () {
  event.preventDefault()
console.log('celly clicked')
}



module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onGameBoard
}
