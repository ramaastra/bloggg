const { Router } = require('express')
const router = Router()
const categoryController = require('../controllers/category.controller')
const auth = require('../middlewares/authentication')
const permit = require('../middlewares/authorization')

router.use(auth)
router.use(permit('ADMIN'))

router.get('/category', categoryController.listPage)
router.get('/category/add', categoryController.createPage)
router.get('/category/:id/edit', categoryController.editPage)
router.post('/category', categoryController.store)
router.post('/category/:id/edit', categoryController.update)
router.post('/category/:id/delete', categoryController.delete)

module.exports = router
