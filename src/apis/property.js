import axiosInstance from "./axios";

export const fetchAllProperties = async () => {
  const res = await axiosInstance.get("/api/v1/listings/search");
  return res.data;
};
