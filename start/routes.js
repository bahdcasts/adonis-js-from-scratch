'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route');
const Todo = use('App/Models/Todo');

Route.get('/', 'TodoController.index');
Route.post('/', 'TodoController.store').validator('SaveTodo');
Route.get('/todos/delete/:id', 'TodoController.destroy').middleware('findTodo');
Route.get('/todos/edit/:id', 'TodoController.edit').middleware('findTodo');
Route.post('/todos/update/:id', 'TodoController.update').validator('SaveTodo').middleware('findTodo');