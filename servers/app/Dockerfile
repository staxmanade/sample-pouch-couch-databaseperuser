FROM node:4-wheezy

MAINTAINER Jason Jarrett jason@elegantcode.com

# Install pm2 *globally* so we can run our application
#RUN npm install -g pm2
RUN npm install -g nodemon

ENV appDir /var/www/app/current

RUN mkdir -p ${appDir}
WORKDIR ${appDir}

# Add our package.json and install *before* adding our application files
ADD ./package.json ./
RUN npm install --production

# Add application files
ADD ./ ${appDir}

EXPOSE 3000

# DEBUG PORT
EXPOSE 5858

## Allow debugging the node web app..
#CMD ["nodemon", "--debug=5858", "server.js"]

CMD ["nodemon", "server.js"]
