import axiosInstance from "../services/api/axiosInstance";


export const registerContractor=(data)=>axiosInstance.post("/api/contractor/register",data)
