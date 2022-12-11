FROM node:16

RUN apt-get update
WORKDIR /Koari
COPY . .
RUN npm install
RUN npm run build

# We need to do this to properly pass on shutdown signals
CMD ["node", "kaori.js"]
# CMD ["npm", "run", "start"]
