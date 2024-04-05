require("dotenv").config();
const { DataSource } = require("typeorm");

const appDataSource = new DataSource({
  type: "mariadb",
  host: process.env.HOST,
  port: 3306,
  username: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
});

appDataSource
  .initialize()
  .then(function () {
    console.log("Connected to database");
  })
  .catch(function (err) {
    console.log("Problem in connecting to database", err);
  });

module.exports = { appDataSource };
