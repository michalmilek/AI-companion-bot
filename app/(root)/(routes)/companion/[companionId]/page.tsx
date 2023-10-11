import prismadb from "@/lib/prismadb";
import React from "react";
import CompanionForm from "./components/CompanionForm";
import getQueryClient from "@/lib/get-query-client";
import { getCompanionById } from "@/app/services/getCompanionById";
import { dehydrate } from "@tanstack/react-query";
import { getCategories } from "@/app/services/getCategories";
import Hydrate from "@/components/hydrate-client";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const page = async ({ params }: CompanionIdPageProps) => {
  const { companionId } = params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["companion", companionId], () =>
    getCompanionById(companionId)
  );
  await queryClient.prefetchQuery(["categories"], getCategories);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div>
        <CompanionForm companionId={companionId} />
      </div>
    </Hydrate>
  );
};

export default page;
