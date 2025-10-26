import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./Client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function () {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div>
      hi there
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
