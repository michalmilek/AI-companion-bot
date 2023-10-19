"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

const SubscriptionPanel = ({ isPro }: { isPro: boolean }) => {
  const onSubscribe = async () => {
    try {
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("onSubscribe error", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Settings</h1>
      <h2>User status:</h2>
      <p>
        {isPro
          ? "The premium package is active."
          : "The premium package is not active."}
      </p>
      <Button onClick={onSubscribe}>
        {isPro ? "Edit your subscription" : "Upgrade"}
      </Button>
    </div>
  );
};

export default SubscriptionPanel;
