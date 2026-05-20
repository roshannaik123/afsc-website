import axiosInstance from "./axiosInstance";

export const getContact = async () => {
  const response = await axiosInstance.post("/getClient");
  return response.data;
};
