const passport = require('../lib/passport')
const { generateHash } = require('../lib/bcrypt')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class AuthenticationController {
  static loginPage = async(req, res) => {
    res.render('pages/authentication/login', { user: req.user })
  }

  static registerPage = async(req, res) => {
    res.render('pages/authentication/register', { user: req.user })
  }

  static register = async(req, res) => {
    await prisma.user.create({
      data: {
        ...req.body,
        password: await generateHash(req.body.password),
        role: 'USER'
      }
    })
    res.render('pages/authentication/login', { newUser: req.body.username, user: null })
  }

  static login = async(req, res, next) => {
    passport.authenticate('local', {
      successReturnToOrRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
    })(req, res, next)
  }

  static logout = async(req, res, next) => {
    req.logout(err => {
      if(err) return next(err)
      res.redirect('/')
    })
  }
}

module.exports = AuthenticationController
