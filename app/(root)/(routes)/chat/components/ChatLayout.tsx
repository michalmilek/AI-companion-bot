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
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ChatMessageSkeleton from "./ChatMessageSkeleton";

interface Props {
  companion: FullCompanionType;
  user: User | null | undefined;
  messages: any[];
  addMessage: (content: string) => void;
  isLoading: boolean;
}

type SchemaType = z.infer<typeof schema>;

const schema = z.object({
  content: z.string().min(3, "Name must be at least 3 characters long"),
});

const ChatLayout = ({
  companion,
  user,
  messages,
  addMessage,
  isLoading,
}: Props) => {
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (values: SchemaType) => {
    addMessage("test");
    form.reset();
  };

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
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center justify-center bg-transparent p-2 gap-4 w-full">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Type a message..."
                    className="h-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            className={`self-end`}>
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChatLayout;
