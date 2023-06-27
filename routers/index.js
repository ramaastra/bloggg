const { Router } = require('express')
const router = Router()
const authenticationRouter = require('../routers/authentication.router')
const blogRouter = require('../routers/blog.router')

router.get('/', (req, res) => {
  res.status(200).render('pages/index')
})

router.use(authenticationRouter)
router.use(blogRouter)

module.exports = router
