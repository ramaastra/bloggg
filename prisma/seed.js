const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { users, categories, blogs } = require('./data')

async function main() {
  // users.forEach(async (user) => {
  //   await prisma.user.create({
  //     data: user
  //   })
  // })

  // categories.forEach(async (category) => {
  //   await prisma.category.create({
  //     data: category
  //   })
  // })

  blogs.forEach(async (blog) => {
    await prisma.blog.create({
      data: blog
    })
  })

  console.log("Data seeding was successful")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
