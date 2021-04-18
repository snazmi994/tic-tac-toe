const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')


const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
    alert('sorry this game sucks')
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
console.log('data')
}


let currentPlayer = 'x'
const onBlockClick = function (event) {
  const cellIndex = $(event.target).data('cell-index')
  // store.game.cells = cellIndex
console.log('this is the cell index that was clicked', cellIndex)
currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
if (currentPlayer === 'x') {
    $(event.target).text('x')
    $('#message').text('O GOES')
  } else if (currentPlayer === 'o') {
    $(event.target).text('o')
    $('#message').text('X You Are Next')
  }
  api.blockClick(cellIndex, currentPlayer)
    .then(ui.onBlockClickSuccess)
    .catch(ui.onBlockClickFailure)
  }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onBlockClick,
  // checkForWinner

}
