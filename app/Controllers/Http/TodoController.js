'use strict'

class TodoController {
  profile({ view }) {
    return view.render('user.profile', {
      username: 'Gernamis'
    });
  }
}

module.exports = TodoController
