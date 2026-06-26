import axiosInstance from "./api/axiosInstance";

export const registerContractor = (data) =>
  axiosInstance.post("/api/contractor/register", data);

export const getUserById = (user_id) => axiosInstance.get(`/users/${user_id}`);

export const createProfile = (data) => {
  return axiosInstance.post("/house_owner/profile", data);
};

export const registerSupplier = (data) =>
  axiosInstance.post("/supplier/register", data);

export const supplierCompleteProfile = (data) => {
  return axiosInstance.post("/supplier-profile/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const registerEquipment = (data) =>
  axiosInstance.post("/api/equipment/register", data);

export const login = (data) => axiosInstance.post("/auth/login", data);

export const registerUser = (data) => axiosInstance.post("/users", data);
