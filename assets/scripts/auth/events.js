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
  if ($._data($('.cell')[0], 'events') === undefined) {
   $('.cell').on('click', onMove)
 }
}

let currentMove = 'x'
const onBlockClick = function (event) {
console.log('celly clicked')
if (currentMove === 'x') {
      $(event.target).text('x')
      ui.onBlockClickSuccess()
      $('#message').text('Omg its ur turn O')
      currentMove = 'o' } else if (currentMove === 'o') {
      $(event.target).text('o')
      $('#message').text('X ur Next')
       currentMove = 'x'
}
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onBlockClick
}
