'use strict'

class RedirectIfAuthenticated {
  async handle ({ response, session, auth }, next) {
    // call next to advance the request
    if (auth.user) {
      session.flash({ notification: 'You are already logged in.' })
      return response.redirect('/dashboard')
    }
    await next()
  }
}

module.exports = RedirectIfAuthenticated
