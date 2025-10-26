// import { PrismaClient } from "@/generated/prisma/client";

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// const prisma = globalForPrisma.prisma || new PrismaClient();

// if(process.env.NODE_ENV !== "production"){
//     globalForPrisma.prisma = prisma;
// }

// export default prisma;


//singleton prisma client instance to avoid multiple instances in dev environment during hot reloading


import { PrismaClient } from "@/generated/prisma/client";

declare global {
  var prisma: undefined | PrismaClient;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
export default prisma;  