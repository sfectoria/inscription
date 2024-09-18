// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import {
  tunisiaGovernorates,
} from './constants/gouvernments'
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // stop seeding if gouvernments exist
  const gouvernments = await prisma.government.findMany();
  if (gouvernments.length) return;
  

  await prisma.government.createMany({
    data: tunisiaGovernorates.map((elem) => ({ nameFr: elem })),
  });

}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
