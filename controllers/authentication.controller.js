const passport = require('../lib/passport')

class AuthenticationController {
  static loginPage = async(req, res) => {
    res.render('pages/authentication/login', { user: req.user })
  }

  static registerPage = async(req, res) => {
    res.render('pages/authentication/register', { user: req.user })
  }

  static async login(req, res, next) {
    passport.authenticate('local', {
      successReturnToOrRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
    })(req, res, next)
  }

  static async logout(req, res, next) {
    req.logout(err => {
      if(err) return next(err)
      res.redirect('/')
    })
  }
}

module.exports = AuthenticationController
