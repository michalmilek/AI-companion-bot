import { PrismaClient } from "@prisma/client";

const prismadb = globalThis.prisma || new PrismaClient();
