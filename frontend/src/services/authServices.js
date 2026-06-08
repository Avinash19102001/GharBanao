import axiosInstance from "./api/axiosInstance";

export const registerContractor = (data) =>
  axiosInstance.post("/api/contractor/register", data);

export const registerHouseOwner = (data) =>
  axiosInstance.post("/api/houseOwners/register", data);