import axiosInstance from "./axiosInstance";

export const getClients = async () => {
  const response = await axiosInstance.get("/getClient");
  return response.data;
};
