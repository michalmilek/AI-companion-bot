import { Companion, Message } from "@prisma/client";

export interface CompanionSend {
  name: string;
  description: string;
  instructions: string;
  seed: string;
  src: string;
  categoryId: undefined | string;
}

export type FullCompanionType = Companion & {
  messages: Message[];
  _count: {
    messages: number;
  };
};
