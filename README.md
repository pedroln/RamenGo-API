<h2> RAMENGO - PLATAFORMA DE PEDIDO </h2>

<h3> Requisitos que foram feitos com sucesso: </h3>

- Listagem dos caldos e proteínas e criação do pedido (Todos os retornos de acordo com os requisitos enviados)

- Conexão com banco de dados PosgreSQL para armazenamento das informações de caldo/proteína/pedidos.

- Utilização de uma API-Key para permitir o uso das funções

- Criação automatizada do banco de dados e povoamento (seeds) dos ingredientes

<h3> REQUISITO PENDENTE: </h3>

- Gerar o ID do pedido a partir da chamada do Endpoint enviado no teste, ao invés disso, o ID do pedido está sendo gerado em sua criação.

**Conteúdo:**

Listagem de Proteínas e Caldos já criados automaticamente no banco de dados (seeds)
Criação de pedidos a partir dessas informações

Bibliotecas utilizadas:

- Bibliotecas do NestJS
- Typeorm
- Typeorm-extension

Funcionalidades:

IMPORTANTE: Antes de rodar o projeto, criar um arquivo .env para a configuração das variáveis de ambientes utilizadas:
<blockquote>DB_NAME = "Nome do banco de dados"
DB_USER = "Usuario do banco de dados"
DB_HOST = "Host do banco de dados"
DB_PORT = "Porta que irá rodar o banco de dados"
DB_PASSWORD = "Senha do banco de dados"
API_KEY = "Api-key que será enviada a partir do header"
</blockquote>


- Para rodar o projeto, primeiramente instalaremos suas dependências:
  <blockquote> "npm install"
  </blockquote>
- Antes de iniciarmos de vez o projeto, utilize o seguinte script para criar o banco de dados e povoa-lo com os ingredientes a partir do seed  
  <blockquote> "npm run prestart"
  </blockquote>
- Após todo este processo, bastar rodar o projeto e testar as suas funções (na url localhost:3000)
  <blockquote> "npm run start:dev"
    </blockquote>
- Lembre-se de inserir a Api-Key via header da seguinte maneira:
  <blockquote> "x-api-key": "sua api-key"
    </blockquote>

<h5> 
  
- Abaixo está listado as rotas e os bodys em JSON (para as requisições que exigem uma inserção do mesmo) de modo que a requisição seja feita com sucesso para cada requisito (e também para dar trigger em cada exceção/validação que foi criada)</h5>

  - <strong>LISTAGEM DE TODAS AS PROTEINAS - ROTA - GET</strong> 
      <blockquote>**url**/broths/</blockquote>
    RETORNO: Lista os caldos disponiveis com suas informações (ja povoados a partir do seed)
    Caso a Api-Key inserida via Header seja diferente da inserida no .env, um erro 403 retornará com a seguinte mensagem:
        <blockquote>"error": "x-api-key header missing"</blockquote>


  - <strong>LISTAGEM DE TODAS AS PROTEINAS - ROTA - GET</strong> 
      <blockquote>**url**/proteins/</blockquote>
    RETORNO: Lista as proteínas disponiveis com suas informações (ja povoados a partir do seed)
    Caso a Api-Key inserida via Header seja diferente da inserida no .env, um erro 403 retornará com a seguinte mensagem:
        <blockquote>"error": "x-api-key header missing"</blockquote>

  
  - <strong>CRIAÇÃO DE UM PEDIDO UTILIZANDO AS INFORMAÇÕES (UM CALDO E UMA PROTEÍNA ESCOLHIDOS) - ROTA - POST</strong> 
        <blockquote>localhost:3000/order</blockquote>
  RETORNO: Pedido salvo, retornando seu nome, sua imagem e um ID gerado.
  O endpoint não permite salvar sem o campo "brothId" e "proteinId", caso algum desses campos sejam retirados, um erro 400 retornará com a seguinte mensagem:
      <blockquote>"error": "both brothId and proteinId are required"</blockquote>
    Caso for inserido um ID não existente, retornará erro 500 com a seguinte mensagem:
        <blockquote>"error": "could not place order"</blockquote>
  
    JSON EXEMPLO:
  
   <blockquote> 
             
              {
                  "brothId": 1,
                  "proteinId": 1
              }
              
   </blockquote>

