import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-url.com/api",
});

export const getServices = () => API.get("/services");
export const getServiceById = (id) => API.get(`/services/${id}`);
