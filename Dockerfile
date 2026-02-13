FROM node:20.17-slim

ADD dashboard /app
WORKDIR /app

# Main dependencies
RUN npm install -d

EXPOSE 3000