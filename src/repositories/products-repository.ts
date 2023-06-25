import { products } from "../products";

export const productsRepository = {
  getProductByTypeYarnAndName(typeName: any, typeYarn: any) {
    const filerByProduct = products.filter((p) => p.typeName === typeName);
    return filerByProduct.filter((p) => p.typeYarn === typeYarn);
  },
  getProductByTypeName(typeName: any) {
    if (typeName > 0) {
      return products.filter((p) => p.typeName === typeName);
    } else {
      return products;
    }
  },
  getProductByTypeYarn(typeYarn: any) {
    if (typeYarn > 0) {
      return products.filter((p) => p.typeYarn === typeYarn);
    } else {
      return products;
    }
  },
};
