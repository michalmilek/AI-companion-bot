import { PrismaClient } from "@prisma/client";

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODEE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
