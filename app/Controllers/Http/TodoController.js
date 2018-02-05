'use strict'

const { validateAll } = use('Validator');
const Todo = use('App/Models/Todo');

class TodoController {
  async index ({ view, auth }) {
    const todos = await auth.user.todos().fetch();
    
    return view.render('home', { todos: todos.toJSON() });
  }

  async store ({ request, response, session, auth }) {
    const body = request.all();

    const todo = await auth.user.todos().create({
      text: body.text
    });
    session.flash({ notification: 'Todo created successfully.' });
    return response.redirect('/dashboard');
  }


  async edit({ request, view }) {
    return view.render('edit-todo', { todo: request.todo });
  }

  async update({ response, request, session, params }) {
    const { todo } = request;
    todo.text = request.all().text;
    await todo.save();

    session.flash({ notification: 'Todo updated successfully.' });
    return response.redirect('/dashboard');
  }

  async destroy({ request, response, session, params }) {
    const { todo } = request;

    await todo.delete();
    session.flash({ notification: 'Todo deleted successfully.' });
    return response.redirect('/dashboard');
  }
}

module.exports = TodoController
