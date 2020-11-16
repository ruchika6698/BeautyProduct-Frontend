import axios from "axios";
axios.defaults.headers.common = {
  Authorization: 'Bearer '+ `${localStorage.getItem("Token")}`
};
export default {
  post(url, data) {
    return axios.post(url, data);
  },
  get(url) {
    return axios.get(url);
  },
  delete(productId) {
    return axios.delete(productId);
  },
  put(data) {
    return axios.put(data.Id, data);
  }
};
