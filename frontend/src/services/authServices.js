import axiosInstance from "./api/axiosInstance";

export const registerContractor = (data) =>
  axiosInstance.post("/api/contractor/register", data);

export const registerHouseOwner = (data) =>
  axiosInstance.post("/houseOwners/register", data);

// export const createProfile = (data) => {
//   return axiosInstance.post("/house_owner/profile", data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

export const createProfile = (data) => {
  return axiosInstance.post("/house_owner/profile", data);
};
