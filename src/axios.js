import axios from "axios";

const myAxios = axios.create({ baseURL: "http://192.168.43.20:7000" });

export default myAxios;
