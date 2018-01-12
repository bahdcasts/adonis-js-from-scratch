'use strict'

const User = use('App/Models/User');

class UserController {
  async store ({ request, response }) {
    await User.create(request.only(['username', 'email', 'password']));

    return response.redirect('back');
  }
}

module.exports = UserController
