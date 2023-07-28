const { Router } = require('express')
const router = Router()
const blogController = require('../controllers/blog.controller')
const upload = require('../middlewares/upload')
const auth = require('../middlewares/auth')

router.get('/blog', blogController.listPage)
router.get('/blog/create', auth, blogController.createPage)
router.get('/blog/:id/read', blogController.detailPage)
router.get('/blog/:id/edit', auth, blogController.editPage)
router.post('/blog/:id/edit', auth, upload.single('img'), blogController.update)

module.exports = router
