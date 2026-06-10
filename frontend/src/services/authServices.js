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
  axiosInstance.post("/register", data);

export const registerEquipment=(data)=>
  axiosInstance.post("/api/equipment/register",data)

export const login=(data)=>
  axiosInstance.post("/auth/login",data)


