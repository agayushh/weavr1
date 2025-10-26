import prisma from "@/lib/db";

export default async function () {
  const users = await prisma.user.findMany();
  return (
    <div>
      hi there
    </div>
  );
}
