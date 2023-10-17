"use client";

import { Companion, Message } from "@prisma/client";
import React, { FormEvent, useState } from "react";
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

  const { input, isLoading, handleInputChange, handleSubmit, setInput } =
    useCompletion({
      api: `/api/chat/${companion.id}`,
      onFinish(_prompt, completion) {
        const systemMessage = {
          role: "system",
          content: completion,
        };

        setMessages((current) => [...current, systemMessage]);

        router.refresh();
      },
    });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");

    handleSubmit(e);
  };

  return (
    <ChatLayout
      companion={companion}
      user={user}
      messages={messages}
      isLoading={isLoading}
      input={input}
      handleInputChange={handleInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default Chat;
