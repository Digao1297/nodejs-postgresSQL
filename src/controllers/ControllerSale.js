/**
 * Controler responsavel pro inserir uma venda ao banco de dados
 */
class ControllerSale {
  constructor(database) {
    this.database = database;
    this.conection;
  }

  async insert(product, sale) {
    this.conection = await this.database.getConection();

    try {
      /**
       * Inicio da transaction
       */
      await this.conection.query("BEGIN");
      var _total = 0;
      /**
       * realizando o calculo do total da venda
       */
      product.forEach((p) => (_total += p.price));

      /**
       * Inserindo a venda e retornando o id
       */
      const sale_id = await this.conection.query(
        `INSERT INTO sale VALUES(default,'${sale.name}',${_total}) RETURNING id`
      );

      /**
       * pescorrendo os produtos e inserindo-os no banco com o id referente a venda
       */
      product.forEach(async (p) => {
        await this.conection.query(
          `INSERT INTO product VALUES (default,${sale_id.rows[0].id},'${p.name}',${p.price})`
        );
      });

      /**
       * finalizando a transaction e confirmando que não ocorreu nenhum erro
       */
      await this.conection.query("COMMIT");
    } catch (error) {
      /**
       * se ocorrer algum erro com a tansaction, sera dado ROLLBACK no banco
       */
      await this.conection.query("ROLLBACK");

      console.error(error);
    } finally {
      /**
       * Fechando a conexão com o banco de dados
       */

      await this.conection.end();
    }
  }
}

module.exports = ControllerSale;
