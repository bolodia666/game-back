FROM node:18-alpine

WORKDIR /app
COPY . .
# RUN npm install --production && rm -f package-lock.json

CMD ["PORT=80", "node", "src"]
