const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class CategoryController {
  static listPage = async(req, res) => {
    const categories = await prisma.category.findMany()
    res.render('pages/category/list', { categories, user: req.user })
  }

  static createPage = async(req, res) => {
    res.render('pages/category/create', { user: req.user })
  }

  static editPage = async(req, res) => {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })
    res.render('pages/category/edit', { category, user: req.user })
  }
  
  static async createPage(req, res) {
    res.render("pages/category/add", { user: req.user })
  }

  static async store(req, res) {
    await prisma.category.create({
      data: {
        name: req.body.name,
        labelColor: req.body.labelColor,
        icon: req.body.icon
      }
    })
    res.redirect("/category")
  }

  static async update(req, res) {
    await prisma.category.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        labelColor: req.body.labelColor,
        icon: req.body.icon
      }
    })
    res.redirect("/category")
  }

  static async delete(req, res) {
    await prisma.category.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    res.redirect("/category")
  }
}

module.exports = CategoryController
