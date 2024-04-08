
const EntitySchema = require("typeorm").EntitySchema;

class User {
  constructor(id, username, password, name, surname, email, address, phone) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
}

const UserEntity = new EntitySchema({
  name: "User",
  target: "User",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    username: {
      type: "varchar",
      length: 50,
    },
    name: {
      type: "varchar",
      length: 50,
    },
    surname: {
      type: "varchar",
      length: 50,
    },
    email: {
      type: "varchar",
    },
    address: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});

module.exports = { UserEntity };
