FROM nodered/node-red:latest

# Definir timezone e variáveis de ambiente
ENV TZ=America/Sao_Paulo
ENV NODE_RED_ENABLE_PROJECTS=true
ENV NODE_RED_ENABLE_SAFE_MODE=false

# Instalar dependências e bcryptjs
USER root
RUN apk add --no-cache tzdata curl
RUN npm install -g bcryptjs
USER node-red

# Criar diretório de dados
RUN mkdir -p /data

# Copiar arquivo de configurações com senha
COPY settings.js /data/settings.js

# Copiar flows personalizados (opcional)
# COPY flows.json /data/flows.json

# Definir diretório de trabalho
WORKDIR /usr/src/node-red

# Expor a porta
EXPOSE 1880

# Configurar healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:1880/admin/health || exit 1

# Comando de inicialização
CMD ["npm", "start"]