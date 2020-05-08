const { Pool } = require("pg");
/**
 * Classe para se conectar ao banco de dados
 *
 */
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
  /**
   * Função responsavel por retorna uma conexão
   */
  async getConection() {
    return await this.client.connect();
  }
}
module.exports = Database;
