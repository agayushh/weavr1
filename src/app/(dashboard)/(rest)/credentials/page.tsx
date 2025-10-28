import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();
  return <div>Credential Page</div>;
};

export default Page;
