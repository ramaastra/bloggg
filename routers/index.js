const { Router } = require('express')
const router = Router()
const authenticationRouter = require('../routers/authentication.router')
const blogRouter = require('../routers/blog.router')
const categoryRouter = require('./category.router')

router.use(authenticationRouter)

router.get('/', (req, res) => {
  res.status(200).render('pages/index', { user: req.user })
})

router.use(blogRouter)
router.use(categoryRouter)

module.exports = router
