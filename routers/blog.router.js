const { Router } = require('express')
const router = Router()
const blogController = require('../controllers/blog.controller')

router.get('/blog', blogController.listPage)
router.get('/blog/read/:id', blogController.detailPage)
router.get('/blog/create', (blogController.createPage))
router.get('/blog/edit/:id', (blogController.editPage))

module.exports = router
