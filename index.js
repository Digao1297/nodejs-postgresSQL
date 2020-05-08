const Database = require("./src/database");
const ControllerSale = require("./src/controllers/ControllerSale");
const Product = require("./src/models/Product");
const Sale = require("./src/models/Sale");

const db = new Database();
const cp = new ControllerSale(db);

var sale = new Sale("Jubileu");

var products = [
  new Product("mascara", 5),
  new Product("revorve", 500),
  new Product("alcool em gel", 5000),
];

cp.insert(products, sale);
