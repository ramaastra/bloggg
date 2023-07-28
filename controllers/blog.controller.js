const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class BlogController {
  static listPage = async(req, res) => {
    const blogs = await prisma.blog.findMany({
      include: {
        category: true,
        author: true
      }
    })

    res.render('pages/blog/list', { blogs })
  }

  static detailPage = async(req, res) => {
    const blog = await prisma.blog.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        category: true,
        author: true
      }
    })
    const otherBlogs  = await prisma.blog.findMany({
      where: {
        NOT: {
          id: Number(req.params.id)
        }
      },
      take: 10
    })

    res.render('pages/blog/detail', { blog, otherBlogs })
  }

  static createPage = async(req, res) => {
    const categories = await prisma.category.findMany()
    res.render('pages/blog/create', { categories })
  }

  static editPage = async(req, res) => {
    const blog = await prisma.blog.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        category: true
      }
    })
    const categories = await prisma.category.findMany()

    res.render('pages/blog/edit', { blog, categories })
  }

  static async update(req, res) {
    const updatedBlog = {
      title: req.body.title,
      body: req.body.body.replace(/\r\n/g, '\n'),
      categoryId: Number(req.body.category)
    }
    
    if(req.file) updatedBlog.image = req.file.filename

    await prisma.blog.update({
      where: {
        id: Number(req.params.id),
      },
      data: updatedBlog
    })

    res.redirect(`/blog/${req.params.id}/read`)
  }
}

module.exports = BlogController
