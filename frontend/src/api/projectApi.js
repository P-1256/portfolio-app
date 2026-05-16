import axios from "axios";

const BASE_URL = "https://portfolio-app-o8sw.onrender.com/api/projects";

export const getProjects = async () => {

  const response = await axios.get(BASE_URL);

  return response.data;
};
