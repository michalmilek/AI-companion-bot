import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { patchCompanion, postCompanion } from "./companion";
import { Companion } from "@prisma/client";
import { getCompanionById } from "../getCompanionById";
import { getCategories } from "../getCategories";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export const useGetCompanionById = (companionId: string) => {
  const response = useQuery(["companion", companionId], () =>
    getCompanionById(companionId)
  );

  return response;
};

export const useGetCategories = () => {
  const response = useQuery(["categories"], getCategories);

  return response;
};

export const usePatchCompanion = () => {
  const queryClient = useQueryClient();

  const { toast } = useToast();

  const mutation = useMutation(patchCompanion, {
    onSuccess: (_, variables) => {
      toast({
        variant: "default",
        description: `${variables.data.name} edited successfully`,
      });
      queryClient.invalidateQueries(["companions"]);
      queryClient.invalidateQueries(["companion", variables.companionId]);
    },
    onError: () => {
      toast({
        variant: "destructive",
        description: "Something went wrong. Check console.",
      });
    },
  });

  return mutation;
};

export const usePostCompanion = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const mutation = useMutation(postCompanion, {
    onSuccess: (data, variables) => {
      toast({
        variant: "default",
        description: "Companion added successfully",
      });
      queryClient.invalidateQueries(["companions"]);
      router.refresh();
      router.push("/");
    },
    onError: () => {
      toast({
        variant: "destructive",
        description: "Something went wrong. Check console.",
      });
    },
  });

  return mutation;
};
