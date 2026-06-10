import axiosInstance from "./api/axiosInstance";

export const registerContractor = (data) =>
  axiosInstance.post("/api/contractor/register", data);

export const registerHouseOwner = (data) =>
  axiosInstance.post("/houseOwners/register", data);

export const registerSupplier = (data) =>
  axiosInstance.post("/supplier/register", data);

export const supplierCompleteProfile = (data) =>
  axiosInstance.post(
    "/supplier-profile/",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );