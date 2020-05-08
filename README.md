# Visão geral
<p align="center">
<img src="https://fhsys.com.br/core-wordpress/wp-content/uploads/2017/06/postgresql-logo.png" height="100" width="100"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" height="90" width="100">
</p>



## Sumário
- [Configurar Ambiente](#configurar-ambiente)
- [Configurar banco de dados](#configurar-banco-de-dados)
- [Executar](#executar)

## Configurar Ambiente:
para rodar esse projeto será necessário instalar algumas dependências:

	- [nodejs](https://nodejs.org/en/download/)
	- [postgreSQL](https://www.pgadmin.org/download/)
	
## Configurar banco de dados:

Será necessário criar o banco com o nome store ou se deseja mudar basta ir na pasta database no arquivo index.js e mudar     o valor do objeto com a chave ‘database’.

Após isso, precisa ser gerado duas tabelas:
    
    
    CREATE TABLE sale(id SERIAL PRIMARY KEY, name varchar(255),total DECIMAL(10,2))

    CREATE TABLE product(id SERIAL PRIMARY KEY, sale_id int, name varchar(255), price DECIMAL(10,2), FOREIGN KEY (sale_id)       REFERENCES sale(id) ON DELETE CASCADE)
    


## Executar:
após as etapas anteriores para executar o projeto, primeiramente precisa ir no diretório do projeto com e abrir um           terminal na pasta.
    
Dentro da pasta basta executar o comando 

	
	npm install
        
	
para instalar todas as dependências do projeto.

E por fim basta rodar o comando 

	
	npm start
	
	
que irá executar o projeto e preencher o banco de dados usando transactions.
    
    



  

