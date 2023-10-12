import React from "react";
import { ChatHeader } from "../components/ChatHeader";
import prismadb from "@/lib/prismadb";
import Chat from "../components/Chat";
import { auth } from "@clerk/nextjs";

const page = async () => {
  const companion = await prismadb.companion.findFirst({
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
