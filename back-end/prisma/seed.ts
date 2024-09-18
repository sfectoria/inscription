// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import {
  academicLevels,
  grades,
  tunisiaGovernorates,
  universities,
} from './constants/igte';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // stop seeding if gouvernments exist
  const gouvernments = await prisma.government.findMany();
  if (gouvernments.length) return;
  

  await prisma.government.createMany({
    data: tunisiaGovernorates.map((elem) => ({ nameFr: elem })),
  });
  await prisma.grade.createMany({
    data: grades.map((elem) => ({ nameAr: elem })),
  });
  await Promise.all(
    universities.map(async (uni) => {
      await prisma.university.create({
        data: {
          nameAr: uni.universityName,
          UniversityPart: {
            create: uni.facultiesAndInstitutes.map((e) => ({ nameAr: e })),
          },
        },
      });
    }),
  );

  await prisma.educationLevel.createMany({
    data: academicLevels.map((elem) => ({ nameAr: elem })),
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
