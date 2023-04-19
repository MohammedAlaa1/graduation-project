const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.patient.create({
    data: {
      name: "Alice",
      email: "alice@prisma.com",
      age: 29,
      phoneNumber: 4344,
      address: "World",
    },
  })

  console.log({ alice })
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
