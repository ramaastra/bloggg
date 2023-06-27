class AuthenticationController {
  static loginPage = async(req, res) => {
    res.render('pages/authentication/login')
  }

  static registerPage = async(req, res) => {
    res.render('pages/authentication/register')
  }
}

module.exports = AuthenticationController
