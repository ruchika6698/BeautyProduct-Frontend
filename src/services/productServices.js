import httpServices from "./httpServices";

export default {
  addProduct(data) {
    return httpServices.post("/Product", data);
  },
  getProduct() {
    return httpServices.get("/Product");
  },
  deleteProduct(Id) {
    return httpServices.delete("/Product/"+Id);
  },
};
