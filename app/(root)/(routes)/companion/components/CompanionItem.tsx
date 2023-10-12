import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Companion, Message } from "@prisma/client";
import { MessageSquare, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const CompanionItem = ({ companion }: Props) => {
  return (
    <Card className="min-w-[250px] lg:min-w-[300px]">
      <Link href={`/chat/${companion.id}`}>
        <CardHeader>
          <CardTitle className="text-md lg:text-xl">{companion.name}</CardTitle>
          <CardDescription className="text-xs lg:text-sm">
            {companion.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex items-center justify-center">
          <div className="h-20 w-20 lg:h-32 lg:w-32 relative text-center  outline-dashed outline-2 outline-offset-8 outline-gray-400">
            <Image
              src={companion.src}
              fill
              alt={companion.name + "avatar"}
              className="rounded-lg"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between w-full items-center">
          <p className="text-xs italic">@{companion.userName}</p>
          <span className="flex items-center gap-2 text-xs italic">
            {companion._count.messages}
            <MessageSquare />
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default CompanionItem;