const { Router } = require('express')
const router = Router()
const blogController = require('../controllers/blog.controller')
const upload = require('../middlewares/upload')
const authenticate = require('../middlewares/authentication')
const permit = require('../middlewares/authorization')

router.get('/blog', blogController.listPage)
router.get('/my-blog', authenticate, permit('USER'), blogController.userListPage)
router.get('/blog/create', authenticate, permit('USER'), blogController.createPage)
router.get('/blog/:id/read', blogController.detailPage)
router.get('/blog/:id/edit', authenticate, permit('USER'), blogController.editPage)
router.post('/blog', authenticate, permit('USER'), upload.single('img'), blogController.store)
router.post('/blog/:id/edit', authenticate, permit('USER'), upload.single('img'), blogController.update)
router.post('/blog/:id/delete', authenticate, permit('USER'), blogController.delete)

module.exports = router
