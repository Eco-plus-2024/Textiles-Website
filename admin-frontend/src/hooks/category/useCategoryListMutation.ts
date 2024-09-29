
import { useMutation } from "@tanstack/react-query";
import { axiosInstane } from "../../../axios";

export const useCategoryListMutation = () => {
  return useMutation({
    mutationKey:["getCategory"],
    mutationFn: async (params: any) => {
     return await axiosInstane.get(`/category/${params}`);
    }  });
};
