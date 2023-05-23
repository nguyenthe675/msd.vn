import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const filters = await readBody(event)
    let products = await prisma.products.findMany(filters)
    return products
})