import "server-only";

import { db } from "@/app/_lib/db";
import type { Product } from "@/app/generated/prisma/client";

export const getProducts = async (): Promise<Product[]> => {
  const products = await db.product.findMany({});

  return products;
};
