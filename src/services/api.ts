import axios from "axios";

const Api = axios.create({
  baseURL: "",
  timeout: 5000,
});

export default Api;
