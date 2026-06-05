import axiosInstance from "./api/axiosInstance";

export const registerHouseOwner = (data) =>
  axiosInstance.post("/api/houseOwners/register", data);
