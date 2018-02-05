const { hooks } = use('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  Exception.handle('InvalidSessionException', (error, { response }) => {
    return response.redirect('/auth/signin');
  })
});
