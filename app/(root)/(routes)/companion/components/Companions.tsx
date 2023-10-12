import { Companion } from "@prisma/client";
import React from "react";
import CompanionItem from "./CompanionItem";

interface Props {
  companions: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}

const Companions = ({ companions }: Props) => {
  return (
    <div className="flex items-center flex-wrap w-full gap-8 justify-center mt-8">
      {companions.length > 0 &&
        companions.map((companion) => (
          <CompanionItem
            key={companion.name + companion.id}
            companion={companion}
          />
        ))}
    </div>
  );
};

export default Companions;
