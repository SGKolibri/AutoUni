import { PrismaClient } from "../generated/prisma"; // I need to use this import to access the PrismaClient

const prisma = new PrismaClient();

export default prisma;
