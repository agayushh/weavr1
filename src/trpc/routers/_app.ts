import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure
    
    .query(({ctx}) => {
      console.log({userId: ctx.auth.user.id});
      return prisma.user.findMany({
        where:{
          id: ctx.auth.user.id
        }
      });
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;