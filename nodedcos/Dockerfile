FROM ubuntu:14.04

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apt-get update

RUN apt-get install -y vim
RUN sudo apt-get install nano 

RUN apt-get install -y -q --no-install-recommends \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    g++ \
    gcc \
    git \
    make \
    nginx \
    sudo \
    wget \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get -y autoclean

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 5.1.0


# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly so we don't have to long-reference npm, node, &c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN mkdir -p /usr/src/tools

COPY . /usr/src/tools 

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY . /usr/src/app 
COPY package.json /usr/src/app/
RUN npm install



EXPOSE 80

CMD [ "npm", "start" ]

