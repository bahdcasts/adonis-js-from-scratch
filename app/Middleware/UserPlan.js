'use strict'

class UserPlan {
  async handle({ request, auth, response, session }, next) {
    // call next to advance the request
    if (auth.user.plan === 'free') {
      session.flash({ notification: 'You need to be on a premium plan to be able to edit.' });
      return response.redirect('back');
    }

    await next()
  }
}

module.exports = UserPlan
