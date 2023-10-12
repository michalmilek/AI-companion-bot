"use client";

import { Companion, Message } from "@prisma/client";
import React, { useState } from "react";
import { useCompletion } from "ai/react";
import { useRouter } from "next/navigation";
import ChatLayout from "./ChatLayout";
import { User } from "@clerk/nextjs/server";
import { FullCompanionType } from "@/app/types/companion";

interface Props {
  companion: FullCompanionType;
  user: User | null | undefined;
}

const Chat = ({ companion, user }: Props) => {
  const [messages, setMessages] = useState<any[]>(companion.messages);
  const router = useRouter();

  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: `/api/chat/${companion.id}`,
    onFinish(prompt, completion) {
      const systemMessage = {
        role: "system",
        content: completion,
      };

      setMessages((current) => [...current, systemMessage]);

      router.refresh();
    },
  });

  const addMessage = (content: string) => {
    const userMessage = {
      role: "user",
      content,
    };

    setMessages((current) => [...current, userMessage]);
  };

  return (
    <ChatLayout
      companion={companion}
      user={user}
      messages={messages}
      addMessage={addMessage}
    />
  );
};

export default Chat;
