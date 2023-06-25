import { products } from "../products";

export const productsRepository = {
  getProductYarnNameSeason(typeName: number, typeYarn: number, season: number) {
    const filerByName = products.filter((p) => p.typeName === typeName);
    const filerByProductYarn = filerByName.filter(
      (p) => p.typeYarn === typeYarn
    );
    return filerByProductYarn.filter((p) => p.season === season);
  },
  getProductNameSeason(typeName: number, season: number) {
    const filerByName = products.filter((p) => p.typeName === typeName);
    return filerByName.filter((p) => p.season === season);
  },
  getProductByTypeYarnAndSeason(typeYarn: number, season: number) {
    const filerByYarn = products.filter((p) => p.typeYarn === typeYarn);
    return filerByYarn.filter((p) => p.season === season);
  },

  getProductByTypeYarnAndName(typeName: number, typeYarn: number) {
    const filerByProduct = products.filter((p) => p.typeName === typeName);
    return filerByProduct.filter((p) => p.typeYarn === typeYarn);
  },
  getProductByTypeName(typeName: number) {
    if (typeName > 0) {
      return products.filter((p) => p.typeName === typeName);
    } else {
      return products;
    }
  },
  getProductByTypeYarn(typeYarn: number) {
    if (typeYarn > 0) {
      return products.filter((p) => p.typeYarn === typeYarn);
    } else {
      return products;
    }
  },
};
