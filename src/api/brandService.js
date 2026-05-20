import axiosInstance from "./axiosInstance";

export const getBrands = async () => {
  const response = await axiosInstance.get("/getBrand");
  return response.data;
};
