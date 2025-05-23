import { db } from "./db"


export async function getProducts () {
  await new Promise((resolve) => setTimeout(resolve,3000));
  const products = await db.product.findMany({
    include: {
      reviews: true,
      discount: true,
      dimension: true
    },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })
  return products
}