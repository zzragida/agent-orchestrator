FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY app ./app
ENV PORT=3000
EXPOSE 3000
CMD ["npm","start"]
