"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import useSubscribeDialog from "@/app/hooks/useSubscribeDialog";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";
import axios from "axios";

const SubscribeDialog = () => {
  const { isSubscribeDialogOpen, setIsSubscribeDialogOpen } =
    useSubscribeDialog();
  const { toast } = useToast();

  const onSubscribe = async () => {
    try {
      const response = await axios.get("api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("subscribeError", error);
    }
  };
  return (
    <Dialog
      onOpenChange={() => setIsSubscribeDialogOpen(false)}
      open={isSubscribeDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upgrade to pro</DialogTitle>
          <DialogDescription>Create custom AI companions!</DialogDescription>
        </DialogHeader>
        <Separator />
        <DialogFooter>
          <div className="w-full justify-between flex items-center">
            <span>
              <span className="font-bold"> 10 PLN </span>/{" "}
              <span className="italic">month</span>
            </span>
            <Button
              onClick={onSubscribe}
              type="button">
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeDialog;
