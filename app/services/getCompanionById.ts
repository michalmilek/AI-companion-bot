import prismadb from "@/lib/prismadb";

export const getCompanionById = async (companionId: string) => {
  try {
    const companion = await prismadb.companion.findUnique({
      where: {
        id: companionId,
      },
    });
    return companion;
  } catch (error) {
    console.error("Error retrieving companion:", error);
    throw error;
  }
};
