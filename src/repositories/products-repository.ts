import { products } from "../products";

export const productsRepository = {
  // findProducts(title: string | null | undefined) {
  //   if (title) {
  //     return products.filter((p) => p.title.indexOf(title) > -1);
  //   } else {
  //     return products;
  //   }
  // },
  // getProductById(id: number) {
  //   const product = products.find((el) => el.id === id);
  //   return product;
  // },
  getProductByTypeYarnAndProduct(typeProduct: any, typeYarn: any) {
    const filerByProduct = products.filter(
      (p) => p.typeProduct === typeProduct
    );
    return filerByProduct.filter((p) => p.typeYarn === typeYarn);
  },
  getProductByTypeProduct(typeProduct: any) {
    if (typeProduct > 0) {
      return products.filter((p) => p.typeProduct === typeProduct);
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
