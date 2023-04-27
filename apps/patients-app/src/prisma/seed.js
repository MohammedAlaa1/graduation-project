const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  const Anas = await prisma.doctor.create({
    data: {
      name: "Anas",
      email: "Anas@prisma.com",
      password: "Anas2030",
      age: 70,
      phoneNumber: 01010101,
      address: "Egypt",
      specialty: "Neurology",
      yeasOfExperience: 20,
      availability: ["Saturday", "Friday"],
      sessionPrice: 40
    },
  })

  console.log({ Anas })
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
