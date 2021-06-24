FROM node:10.13.0-alpine
# Env
ENV ENV_NAME development
ENV EGG_SERVER_ENV development
ENV NODE_ENV development
ENV NODE_CONFIG_ENV development
ENV_VAR=123

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .

# Install all Packages
RUN npm install

# Copy all other source code to work directory
ADD . /usr/src/app

# TypeScript
RUN npm run tsc

# Start
CMD [ "npm", "start" ]
EXPOSE 7001
