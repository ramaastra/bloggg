const { Router } = require('express')
const router = Router()
const authenticationController = require('../controllers/authentication.controller')

router.get('/login', authenticationController.loginPage)
router.get('/register', authenticationController.registerPage)

module.exports = router
