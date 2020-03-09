import axios from "axios";

const baseURL = "http://localhost:7000";

const myAxios = axios.create({ baseURL });

const getAuthorizationHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: "Bearer " + token
    }
  };
};
export { getAuthorizationHeaders, baseURL };

export default myAxios;
