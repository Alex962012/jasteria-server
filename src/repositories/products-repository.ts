import { products } from "../products";

export const productsRepository = {
  findProducts(title: string | null | undefined) {
    if (title) {
      return products.filter((p) => p.title.indexOf(title) > -1);
    } else {
      return products;
    }
  },
};
