# node-red

Node-red template to easy deploy

## Como gerar a senha

```bash
node -e "console.log(require('bcryptjs').hashSync(process.argv[1], 8));" sua_senha_aqui
```

## Como iniciar o projeto

1. Clone o repositório
2. Defina as variáveis de ambiente ou crie um arquivo `.env`:

   ```
   NODE_RED_USERNAME=admin
   NODE_RED_PASSWORD_HASH=seu_hash_aqui
   PORT=1880
   ```

3. Inicie o projeto com Docker Compose:

   ```bash
   docker-compose up -d
   ```

4. Acesse o Node-RED em: http://localhost:{PORT}/admin (padrão: http://localhost:1880/admin)

5. Para parar o projeto:
   ```bash
   docker-compose down
   ```

## Estrutura do projeto

- `settings.js`: Configurações do Node-RED
- `docker-compose.yml`: Configuração dos containers
- Porta padrão: 1880
- Interface administrativa: `/admin`
- API: `/api`
