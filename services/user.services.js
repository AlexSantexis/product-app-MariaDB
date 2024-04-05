const userEntity = require("../model/users").UserEntity;
const dataSource = require("../connect").appDataSource;

async function findAll() {
  const result = await dataSource
    .getRepository(userEntity)
    .createQueryBuilder()
    .select("users")
    .from(userEntity, "users")
    .getMany();
  return result;
}

async function findOne(id) {
  const result = await dataSource
    .getRepository(userEntity)
    .createQueryBuilder()
    .select("users")
    .from(userEntity, "users")
    .where("user.id = :id", { id: id })
    .getOne();
  return result;
}

async function create(
  username,
  password,
  name,
  surname,
  email,
  address,
  phone
) {
  const result = await dataSource
    .getRepository(userEntity)
    .createQueryBuilder()
    .insert()
    .into(userEntity)
    .values([
      {
        username: username,
        password: password,
        name: name,
        surname: surname,
        email: email,
        address: address,
        phone: phone,
      },
    ])
    .execute()
    .catch((error) => console.log(error));
  return result;
}

async function deleteUser(id) {
  const result = await dataSource
    .getRepository(userEntity)
    .createQueryBuilder()
    .delete()
    .from(userEntity, "users")
    .where("id = :id", { id: id })
    .execute()
    .catch((error) => console.log(error));
  return result;
}

module.exports = { findAll, findOne, create, deleteUser };
