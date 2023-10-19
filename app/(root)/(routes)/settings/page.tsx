import { checkSubscription } from "@/lib/subscription";
import React from "react";
import SubscriptionPanel from "./companion/SubscriptionPanel";

const page = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <SubscriptionPanel isPro={isPro} />
    </div>
  );
};

export default page;
