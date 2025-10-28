import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: {
    workflowId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  await requireAuth();
  const { workflowId } = await params;
  return <div>Workflow id: {workflowId}</div>;
};

export default Page;
