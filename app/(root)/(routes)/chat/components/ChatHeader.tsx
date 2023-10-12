"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Companion, Message } from "@prisma/client";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import AvatarWithPlaceholder from "@/components/AvatarWithPlaceholder";
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

interface ChatHeaderProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

export const ChatHeader = ({ companion }: ChatHeaderProps) => {
  const router = useRouter();
  const { user } = useUser();
  const { toast } = useToast();

  const onDelete = async () => {
    try {
      await axios.delete(`/api/companion/${companion.id}`);
      toast({
        description: "Success.",
      });
      router.refresh();
      router.push("/");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
    }
  };

  return (
    <div className="flex w-full justify-between items-center border-b border-gray-200 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button
          onClick={() => router.back()}
          size="icon">
          <ChevronLeftIcon className="h-8 w-8" />
        </Button>
        <AvatarWithPlaceholder
          src={companion.src}
          name={companion.name}
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="font-bold">{companion.name}</p>
            <div className="flex gap-2  items-center text-xs text-muted-foreground">
              <ChatBubbleLeftRightIcon className="w-3 h-3" />
              {companion._count.messages}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Created by {companion.userName}
          </p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon">
            <EllipsisHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => router.push(`/companion/${companion.id}`)}>
            <PencilIcon className="w-4 h-4 mr-2" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onDelete}>
            <TrashIcon className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
