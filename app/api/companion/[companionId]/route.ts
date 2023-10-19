import prismadb from "@/lib/prismadb";
import { checkSubscription } from "@/lib/subscription";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

interface IParams {
  params: {
    companionId: string;
  };
}

export const PATCH = async (req: Request, { params }: IParams) => {
  try {
    const body = await req.json();
    const user = await currentUser();
    const { src, name, description, instructions, seed, categoryId } = body;
    const { companionId } = params;

    if (!companionId) {
      return new NextResponse("Wrong companion ID", { status: 404 });
    }

    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (
      !src ||
      !name ||
      !description ||
      !instructions ||
      !seed ||
      !categoryId
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const isPro = await checkSubscription();

    const companion = await prismadb.companion.update({
      where: { id: companionId, userId: user.id },
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        ...body,
      },
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
