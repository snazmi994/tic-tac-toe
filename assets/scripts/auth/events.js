const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const onSignUp = function (event) {
  event.preventDefault()
const form = event.target
const data = getFormFields(form)
api.signUp(data)
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

const onSignOut = function () {
 event.preventDefault()
 api.signOut()
.then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onStartGame = function(event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.startGame(data)
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}


module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onStartGame
}
