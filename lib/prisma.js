import { PrismaClient } from '@prisma/client';

// Create a new instance of the PrismaClient
const prisma = new PrismaClient();

// Export the PrismaClient instance to be used in other parts of your application
export default prisma;
