import { CompanionSend } from "@/app/types/companion";
import axios from "axios";

export const patchCompanion = async ({
  companionId,
  data,
}: {
  companionId: string;
  data: CompanionSend;
}) => {
  try {
    const response = await axios.patch(`/api/companion/${companionId}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postCompanion = async ({ data }: { data: CompanionSend }) => {
  try {
    const response = await axios.post(`/api/companion`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
