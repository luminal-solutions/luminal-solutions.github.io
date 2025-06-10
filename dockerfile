FROM node:24-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:24-alpine AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/next.config.js ./

COPY --from=builder /app/dist ./dist

RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "start"]
