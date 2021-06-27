FROM node:12.14.0-alpine
# Env
ENV ENV_NAME development
ENV EGG_SERVER_ENV development
ENV NODE_ENV development
ENV NODE_CONFIG_ENV development


# Create Directory for the Container
WORKDIR /usr/src/app


# Copy all other source code to work directory
ADD . /usr/src/app

# Install all Packages
RUN npm install



# TypeScript
RUN npm run tsc

# Start
# CMD [ "npm", "run", "start_dev" ]

EXPOSE 5005
