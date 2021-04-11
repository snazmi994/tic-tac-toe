const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: ''
  })
}

const blockClick = function (board, player) {
    return $.ajax({
      method: 'PATCH',
      url: config.apiUrl + '/games/' + 'id',
      headers: {
        Authorization: 'Bearer' + store.user.token
      },
      data: {
      'game': {
          'cell': {
            'index': board,
            'value': player
          }
        }
      }

    })
  }




module.exports = {
  signUp,
  signIn,
  signOut,
  createGame,
  blockClick

}
