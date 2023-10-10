const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.categories.createMany({
      data: [
        { name: "Famous People" },
        { name: "Actors" },
        { name: "People from sport" },
        { name: "Musicians" },
        { name: "Fake characters" },
        { name: "Animals" },
        { name: "Kings" },
        { name: "Scientists" },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
