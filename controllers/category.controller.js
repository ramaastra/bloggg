const dummyCategories = require('./dummyCategories')

class CategoryController {
  static listPage = async(req, res) => {
    const categories = dummyCategories
    res.render('pages/category/list', { categories })
  }

  static createPage = async(req, res) => {
    res.render('pages/category/create', { categories: dummyCategories })
  }

  static editPage = async(req, res) => {
    const category = dummyCategories
      .find(category => category.id == req.params.id)
    res.render('pages/category/edit', { category })
  }
}

module.exports = CategoryController
