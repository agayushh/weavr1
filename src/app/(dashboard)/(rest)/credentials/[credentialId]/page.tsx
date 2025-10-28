import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: {
    credentialId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  await requireAuth();
  const { credentialId } = await params;
  return <div>Credential id: {credentialId}</div>;
};

export default Page;
