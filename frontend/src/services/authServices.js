import axiosInstance from "./api/axiosInstance";

export const registerHouseOwner = (data) =>
  axiosInstance.post("/houseOwners/register", data);

