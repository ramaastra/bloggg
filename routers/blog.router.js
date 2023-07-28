const { Router } = require('express')
const router = Router()
const blogController = require('../controllers/blog.controller')
const upload = require('../middlewares/upload')

router.get('/blog', blogController.listPage)
router.get('/blog/create', blogController.createPage)
router.get('/blog/:id/read', blogController.detailPage)
router.get('/blog/:id/edit', blogController.editPage)
router.post('/blog/:id/edit', upload.single('img'), blogController.update)

module.exports = router
