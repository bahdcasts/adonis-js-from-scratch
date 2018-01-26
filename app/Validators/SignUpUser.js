'use strict'

class SignUpUser {
  get rules() {
    return {
      'username': 'required|unique:users',
      'email': 'required|unique:users',
      'password': 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'The email is required.',
      'password.required': 'The password is required.',
      'username.required': 'The username is required.'
    };
  }

  async fails(errorMessages) {
    this.ctx.session.withErrors(errorMessages)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = SignUpUser
