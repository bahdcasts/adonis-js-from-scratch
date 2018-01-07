'use strict'

const Todo = use('App/Models/Todo');

class FindTodo {
  async handle ({ request, params, session, response }, next) {
    // call next to advance the request
    // find the todo , and handle the case where the todo does not exist
    const todo = await Todo.find(params.id);

    if (!todo) {
      session.flash({ notification: 'Todo was not found.' });

      return response.redirect('/');
    }

    request.todo = todo;
    await next()
  }
}

module.exports = FindTodo
