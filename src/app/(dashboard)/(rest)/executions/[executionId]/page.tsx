interface PageProps {
  params: {
    executionId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  
  const { executionId } = await params;
  return <div>Execution id: {executionId}</div>;
};

export default Page;
