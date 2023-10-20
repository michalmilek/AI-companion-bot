import prismadb from "@/lib/prismadb";

export const getCategories = async () => {
  try {
    const categories = await prismadb.category.findMany();
    return categories;
  } catch (error) {
    throw error;
  }
};
