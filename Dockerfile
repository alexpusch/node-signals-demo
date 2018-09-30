from node

RUN npm install -g yarn
WORKDIR /app
COPY package* .
RUN npm install
COPY . .

CMD ["npm", "start"]
