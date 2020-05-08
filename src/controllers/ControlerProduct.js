class ControllerProduct {
  constructor(database) {
    this.database = database;
    this.conection;
  }

  async insert(product, sale) {
    this.conection = await this.database.getConection();

    try {
      await this.conection.query("BEGIN");

      const sale_id = await this.conection.query(
        `INSERT INTO sale VALUES(default,'${sale.name}',${sale.total}) RETURNING id`
      );

      product.forEach(async (p) => {
        await this.conection.query(
          `INSERT INTO product VALUES (default,${sale_id.rows[0].id},'${p.name}',${p.price})`
        );
      });

      await this.conection.query("COMMIT");
    } catch (error) {
      await this.conection.query("ROLLBACK");
      await this.conection.end();

      console.error(error);
    } finally {
      await this.conection.end();
    }
  }
}

module.exports = ControllerProduct;
