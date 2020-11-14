import httpServices from "./httpServices";

export default {
  addProduct(data) {
    return httpServices.post("/Product", data);
  },
  getProduct() {
    return httpServices.get("/Product");
  },
  deleteProduct(data) {
    return httpServices.post("/Product/Id", data);
  },
  updateProduct(data) {
    return httpServices.post("/Product/Id", data);
  }
};
