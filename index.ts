import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// const jsonVal = [
// ,
// ] as Prisma.JsonArray;

// console.log(jsonVal);

async function main() {
  const categories = await prisma.category.create({
    data: {
      posts: {
        connectOrCreate: {
          where: {
            id: "54a00371a63eff562280f434",
          },
          create: {
            title: "Saiiki Kusuo",
            averageRating: 4.9,
            author: {
              connectOrCreate: {
                where: {
                  email: "hello@prisma.com",
                },
                create: {
                  email: "connectingcategoriestouser@prisma.io",
                  name: "Velma",
                  age: 67,
                  preferences: [],
                },
              },
            },
          },
        },
      },
    },
  });

  console.log(categories);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
