# Introdução prática a computação em nuvem usando AWS

 #### Roteiro de Desenvolvimento 

- Criar tabela no DynomeDB
  - Inserir item de demonstração
- Criar função lambda 
  - Permissões de escrita no DynomeDB
- Criar API com rotas no API Gateway
  - Integração com função lambda

__Obs: Atenção a região dos serviços__

### Serviços Relevantes

- Cognito
- EC2
- Amplify
- RDS
- S3



##### Congnito 

Gerenciamento de __user pools__;

##### DynamoDB

- Create Table

  - Criar item
  - Query

  

##### Lambda

- Criar Lambda
  - Criar do Zero
- Teste
  - Configure test event
    - name teste event
    - save
  - Testar



##### API Gateway

- Build
  - Autodeploy
  - Criar
- Rotas
  - Create
    - POST = /items (igual da lambda index.js) 
      - DELETE = items/{id} 
      - GET = items/{id}
      - PUT =  items/{id}
      - GET = /items



###### Integrações API Gateawy









