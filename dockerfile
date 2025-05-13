# use official node.js image
FROM node:18-alpine

# use production environment
ENV NODE_ENV production

# set working directory
WORKDIR /app

# copy package files and install dependencies
COPY package*.json ./
RUN npm install

# copy the rest of the application code
COPY . .

# build the next.js application
RUN npm run build

# set user to node
USER node

# expose port for application
EXPOSE 3000

# start the application
CMD ["npm", "start"]
