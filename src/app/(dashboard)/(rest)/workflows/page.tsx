import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();
  return <div>Workflows Page</div>;
};

export default Page;
