import Product from "../models/Products.js";
const products = Product.find([]);
export const productsRepository = {
  async getProductYarnNameSeason(
    typeName: number,
    typeYarn: number,
    season: number
  ) {
    const filerByName = (await products).filter((p) => p.typeName === typeName);
    const filerByProductYarn = filerByName.filter(
      (p) => p.typeYarn === typeYarn
    );
    return filerByProductYarn.filter((p) => p.season === season);
  },
  async getProductNameSeason(typeName: number, season: number) {
    const filerByName = (await products).filter((p) => p.typeName === typeName);
    return filerByName.filter((p) => p.season === season);
  },
  async getProductByTypeYarnAndSeason(typeYarn: number, season: number) {
    const filerByYarn = (await products).filter((p) => p.typeYarn === typeYarn);
    return filerByYarn.filter((p) => p.season === season);
  },

  async getProductByTypeYarnAndName(typeName: number, typeYarn: number) {
    const filerByProduct = (await products).filter(
      (p) => p.typeName === typeName
    );
    return filerByProduct.filter((p) => p.typeYarn === typeYarn);
  },
  async getProductByTypeName(typeName: number) {
    if (typeName > 0) {
      return (await products).filter((p) => p.typeName === typeName);
    } else {
      return products;
    }
  },
  async getProductSeason(season: number) {
    if (season > 0) {
      return (await products).filter((p) => p.season === season);
    } else {
      return products;
    }
  },
  async getProductByTypeYarn(typeYarn: number) {
    if (typeYarn > 0) {
      return (await products).filter((p) => p.typeYarn === typeYarn);
    } else {
      return products;
    }
  },
};
