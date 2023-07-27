const { Router } = require('express')
const router = Router()
const blogController = require('../controllers/blog.controller')

router.get('/blog', blogController.listPage)
router.get('/blog/create', blogController.createPage)
router.get('/blog/:id/read', blogController.detailPage)
router.get('/blog/:id/edit', blogController.editPage)

module.exports = router
