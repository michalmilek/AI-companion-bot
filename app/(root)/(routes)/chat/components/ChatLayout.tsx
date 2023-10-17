import { FullCompanionType } from "@/app/types/companion";
import AvatarWithPlaceholder from "@/components/AvatarWithPlaceholder";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@clerk/nextjs/server";
import { Companion, Message } from "@prisma/client";
import React, { FormEvent, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ChatMessageSkeleton from "./ChatMessageSkeleton";

interface Props {
  companion: FullCompanionType;
  user: User | null | undefined;
  messages: any[];
  isLoading: boolean;
  input: string;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const ChatLayout = ({
  companion,
  user,
  messages,
  isLoading,
  input,
  handleInputChange,
  onSubmit,
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex flex-col mt-8 justify-between h-[calc(100%-100px)]">
      <div className="flex flex-col gap-2">
        <div className="flex-grow overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${
                message.role === "user" ? "justify-start" : "flex-row-reverse"
              } flex gap-2 mb-2`}>
              <AvatarWithPlaceholder
                src={user ? user.imageUrl : companion.src}
                name={user ? companion.userName : companion.name}
              />
              <div
                className={`${
                  message.role === "user" ? "bg-gray-200" : "bg-blue-500"
                } rounded-lg p-2 text-white`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
        {isLoading && <ChatMessageSkeleton />}
        <div ref={scrollRef} />
      </div>
      <form
        onSubmit={onSubmit}
        className="flex items-center justify-center bg-transparent p-2 gap-4 w-full">
        <Input
          type="text"
          placeholder="Type a message..."
          className="h-full"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          disabled={isLoading}
          className={`self-end`}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatLayout;
