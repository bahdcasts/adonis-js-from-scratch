'use strict'

const Todo = use('App/Models/Todo');

class TodoController {
  async index ({ view }) {
    // fetch some data
    const todos = await Todo.all();
    
    return view.render('home', { todos: todos.toJSON() });
  }

  async store ({ request, response }) {
    const body = request.all();

    const todo = await Todo.create({
      text: body.text
    });
    return response.redirect('/');
  }
}

module.exports = TodoController
