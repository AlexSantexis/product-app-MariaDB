

const EntitySchema = require("typeorm").EntitySchema;

// class Product {
//   constructor(id, name, cost, description, quantity) {
//     this.id = id;
//     this.name = name;
//     this.cost = cost;
//     this.description = description;
//     this.quantity = quantity;
//   }
// }

const ProductEntity = new EntitySchema({
  name: "Product",
  target: "Product",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    cost: {
      type: "int",
    },
    description: {
      type: "text",
    },
    quantity: {
      type: "int",
    },
  },
  relations: {
    users: {
      target: "User",
      type: "many-to-many",
      joinTable: true,
      cascade: true,
    },
  },
});

module.exports = { ProductEntity };
