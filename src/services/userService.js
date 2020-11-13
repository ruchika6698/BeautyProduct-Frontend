import httpService from "./httpServices.js";

export default {
  login(data) {
    return httpService.post("/User/Login", data);
  },
  register(data) {
    return httpService.post("/User", data);
  }
};