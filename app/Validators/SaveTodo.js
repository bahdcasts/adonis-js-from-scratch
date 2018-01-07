'use strict'

class SaveTodo {
  get rules () {
    return {
      text: 'required|min:8'
    }
  }
  get messages () {
    return {
      'text.required': 'Please provide a todo.',
      'text.min': 'Your todo is not long enough.'
    }
  }

  async fails (errorMessages) {
    this.ctx.session.withErrors(errorMessages).flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = SaveTodo
