import prismadb from "@/lib/prismadb";

export const findCategoryByName = async (name: string) => {
  try {
    const category = await prismadb.category.findFirst({
      where: {
        name: {
          equals: name,
        },
      },
    });
    return category;
  } catch (error) {
    console.error(`Error retrieving category with name ${name}:`, error);
    throw error;
  }
};
