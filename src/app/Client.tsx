"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return <div>Client Component
    {users?.map((user) => (
      <div key={user.id}>
        {user.id} - {user.email}
      </div>
    ))}
  </div>;
};
