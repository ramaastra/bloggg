const dummyBlogs = require('./dummyBlogs')
const dummyCategories = require('./dummyCategories')

class BlogController {
  static listPage = async(req, res) => {
    const blogs = dummyBlogs
    res.render('pages/blog/list', { blogs })
  }

  static detailPage = async(req, res) => {
    const blog = dummyBlogs
      .find(blog => blog.id == req.params.id)
    const otherBlogs = dummyBlogs
      .filter(blog => blog.id != req.params.id)
      .splice(0, 10)

    res.render('pages/blog/detail', { blog, otherBlogs })
  }

  static createPage = async(req, res) => {
    res.render('pages/blog/create', { categories: dummyCategories })
  }

  static editPage = async(req, res) => {
    const blog = dummyBlogs
      .find(blog => blog.id == req.params.id)
    res.render('pages/blog/edit', { blog, categories: dummyCategories })
  }
}

module.exports = BlogController
