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

Route.group(() => {
  Route.get('/delete/:id', 'TodoController.destroy');
  Route.get('/edit/:id', 'TodoController.edit');
  Route.post('/update/:id', 'TodoController.update').validator('SaveTodo');
}).prefix('/todos').middleware('findTodo');

Route.get('/logout', async ({ auth, response }) => {
  await auth.logout();
  return response.redirect('/');
});

Route.on('/auth/signup').render('auth.sign-up');
Route.on('/auth/signin').render('auth.sign-in');
Route.post('/auth/signup', 'UserController.store');
Route.post('/auth/signin', 'UserController.signIn');
