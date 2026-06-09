import axiosInstance from "./api/axiosInstance";

export const registerContractor = (data) =>
  axiosInstance.post("/api/contractor/register", data);

export const registerHouseOwner = (data) =>
  axiosInstance.post("/houseOwners/register", data);

export const registerSupplier = (data) =>
  axiosInstance.post("/register", data);
