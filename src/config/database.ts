import pkg from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const { PrismaClient } = pkg;
const db = new PrismaClient();
export default db;