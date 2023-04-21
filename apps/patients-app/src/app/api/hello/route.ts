import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function getPatients() {
  let patients = await prisma.patient.findMany({
    where: { email: "vic@prisma.com" },
  })
  console.log(JSON.stringify(patients))
  return { patients }
}

export async function GET(request: Request) {
  let patients = await getPatients()
  return new Response(JSON.stringify(patients))
}
