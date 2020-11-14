import axios from "axios";
axios.defaults.headers.common = {
  Authorization: `${localStorage.getItem("Token")}`
};
export default {
  post(url, data) {
    return axios.post(url, data);
  },
  get(url) {
    return axios.get("/" + url);
  },
  delete(Id) {
    return axios.delete("/" + Id);
  },
  put(data) {
    return axios.put("/" + data.Id, data);
  }
};
