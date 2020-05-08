const { Pool } = require("pg");

class Database {
  constructor() {
    this.client = new Pool({
      user: "postgres",
      host: "localhost",
      database: "store",
      password: "cicada3301",
      port: 5432,
    });
  }

  async initDatabase() {
    await this.client.connect();

    await this.createTable();

    await this.client.end();
  }
  async drop() {
    await this.client.query("DROP TABLE product");
    await this.client.query("DROP TABLE sale");
  }
  async createTable() {
    try {
      await this.client.query(
        `CREATE TABLE sale(id SERIAL PRIMARY KEY, name varchar(255),total DECIMAL(10,2))`
      );
      await this.client.query(
        `CREATE TABLE product(id SERIAL PRIMARY KEY, sale_id int, name varchar(255), price DECIMAL(10,2),
         FOREIGN KEY (sale_id) REFERENCES sale(id) ON DELETE CASCADE
        )`
      );
    } catch (error) {
      await this.drop();
      await this.createTable();
      console.log("recreating the tables because some already exist....");
    }
  }

  async getConection() {
    return await this.client.connect();
  }
}
module.exports = Database;
