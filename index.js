const Database = require("./src/database");
const ControllerProduct = require("./src/controllers/ControlerProduct");
const Product = require("./src/models/Product");
const Sale = require("./src/models/Sale");

const db = new Database();
const cp = new ControllerProduct(db);

var sale = new Sale("Jubileu", 0);

var products = [
  new Product("mascara", 5),
  new Product("revorve", 500),
  new Product("alcool em gel", 5000),
];

//db.initDatabase();
cp.insert(products, sale);
