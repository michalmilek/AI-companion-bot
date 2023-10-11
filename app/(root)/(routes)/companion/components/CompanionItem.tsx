import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Companion } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface Props {
  companion: Companion & {
    _count: {
      messages: number;
    };
  };
}

const CompanionItem = ({ companion }: Props) => {
  return (
    <Card className="min-w-[250px] lg:min-w-[300px]">
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
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default CompanionItem;
