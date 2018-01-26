'use strict'

class SignInUser {
  get rules() {
    return {
      'email': 'required|email',
      'password': 'required'
    }
  }

  get messages() {
    return {
      'required': 'The {{ field }} is required.'
    };
  }

  async fails(errorMessages) {
    this.ctx.session.withErrors(errorMessages)
      .flashAll();

    this.ctx.response.redirect('back');
  }
}

module.exports = SignInUser
