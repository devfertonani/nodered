# node-red

Node-red template for easy deployment

## How to generate password

```bash
node -e "console.log(require('bcryptjs').hashSync(process.argv[1], 8));" your_password_here
```

## How to start the project

1. Clone the repository
2. Set environment variables or create a `.env` file:

   ```
   NODE_RED_USERNAME=admin
   NODE_RED_PASSWORD_HASH=your_hash_here
   PORT=1880
   ```

3. Start the project with Docker Compose:

   ```bash
   docker-compose up -d
   ```

4. Access Node-RED at: http://localhost:{PORT}/admin (default: http://localhost:1880/admin)

5. To stop the project:

   ```bash
   docker-compose down
   ```

## Project structure

- `settings.js`: Node-RED configuration
- `docker-compose.yml`: Containers configuration
- Default port: 1880
- Admin interface: `/admin`
- API: `/api`