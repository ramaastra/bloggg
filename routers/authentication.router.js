const { Router } = require('express')
const router = Router()
const authenticationController = require('../controllers/authentication.controller')

router.get('/login', authenticationController.loginPage)
router.get('/register', authenticationController.registerPage)
router.post('/login', authenticationController.login)
router.post('/logout', authenticationController.logout)

module.exports = router
