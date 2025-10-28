import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";

export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(async ({ ctx }) => {
    try {
      console.log("Context:", ctx);
      const workflows = await prisma.workflow.findMany();
      console.log("Workflows:", workflows);
      return workflows;
    } catch (error) {
      console.error("Error fetching workflows:", error);
      throw error;
    }
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    try {
      const workflow = await prisma.workflow.create({
        data: {
          name: "test-workflow",
        },
      });
      return workflow;
    } catch (error) {
      console.error("Error creating workflow:", error);
      throw error;
    }
  }),
});

export type AppRouter = typeof appRouter;
