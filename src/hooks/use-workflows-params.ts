import { useQueryStates } from "nuqs";
import { workflowsParams } from "@/features/workflows/params";

export const useWorkflowsParams = () => {
  return useQueryStates(workflowsParams);
};


