const { Router } = require('express')
const router = Router()
const categoryController = require('../controllers/category.controller')

router.get('/category', categoryController.listPage)
router.get('/category/add', (categoryController.createPage))
router.get('/category/:id/edit', (categoryController.editPage))

module.exports = router
