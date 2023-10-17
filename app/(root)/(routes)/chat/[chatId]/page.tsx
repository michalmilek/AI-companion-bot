import React from "react";
import { ChatHeader } from "../components/ChatHeader";
import prismadb from "@/lib/prismadb";
import Chat from "../components/Chat";
import { auth } from "@clerk/nextjs";


interface IParams {
  chatId: string;
}

const page = async ({ params }: { params: IParams }) => {
  const companion = await prismadb.companion.findFirst({
    where: {
      id: params.chatId,
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
      messages: true,
    },
  });

  const { user } = auth();

  if (!companion) {
    return null;
  }

  return (
    <div className="h-full">
      <ChatHeader companion={companion} />
      <Chat
        companion={companion}
        user={user}
      />
    </div>
  );
};

export default page;
