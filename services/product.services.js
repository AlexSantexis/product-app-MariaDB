const productEntity = require("../model/products").ProductEntity;
const dataSource = require("../connect").appDataSource;

async function findAll() {
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder("product")
    .leftJoinAndSelect("product.users", "user")
    .getMany();
}

async function findOne(id) {
  const results = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder("product")
    .leftJoinAndSelect("product.users", "user")
    .where("product.id = :id", { id: id })
    .getOne();

  return results;
}

async function create(data) {
  console.log(data);
  const result = await dataSource
    .getRepository(productEntity)
    .save(data)
    .then(() => console.log("Product has been saved"))
    .catch((error) => console.log("Problem in saving product", error));

  return result;
}

module.exports = { findAll, findOne, create };
