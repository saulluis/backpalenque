# Etapa 1: Build
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Producción
FROM node:22-alpine AS production

WORKDIR /app
COPY package*.json ./
RUN npm install 

# Copiamos solo el código compilado y necesario
COPY --from=builder /app/dist ./dist

# Exponemos el puerto
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
