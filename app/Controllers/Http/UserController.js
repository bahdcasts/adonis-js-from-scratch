'use strict'

const User = use('App/Models/User');

class UserController {
  async store ({ request, response, auth }) {
    const user = await User.create(request.only(['username', 'email', 'password']));

    await auth.login(user);
    return response.redirect('/');
  }

  async signIn({ request, response, auth, session }) {
    const { email, password } = request.all();

    try {
      await auth.attempt(email, password);
      session.flash({ notification: 'Login Successful.' });
      return response.redirect('/');
    } catch (error) {
      console.log(error);
      return response.redirect('back');
    }
  }
}

module.exports = UserController
