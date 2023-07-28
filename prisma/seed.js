const { generateHash } = require('../lib/bcrypt')
const { users, categories, blogs } = require('./data')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  for(let user of users) {
    await prisma.user.create({
      data: {
        ...user,
        password: await generateHash(user.password)
      }
    })
  }

  for(let category of categories) {
    await prisma.category.create({
      data: category
    })
  }

  for(let blog of blogs) {
    await prisma.blog.create({
      data: blog
    })
  }

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
