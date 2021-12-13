# Prerequisites

Nodejs 

Mongodb database

# MongoDB Installation

## Docker 

1. Install Docker for your operating system (if not installed already)

- <a href="https://hub.docker.com/editions/community/docker-ce-desktop-windows/">Install Docker Desktop on Windows </a> 

-  <a href="https://hub.docker.com/editions/community/docker-ce-desktop-mac/">Install Docker Desktop on macOS </a>

-  <a href="https://docs.docker.com/engine/install/ubuntu/">Install Docker Desktop on Linux </a>

2. Open up a Terminal session and run:

```bash
docker run --name mongo -p 27017:27017 -d mongo
```

MongoDB should be running.


## non-Docker installation

<ul>
  <li><a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/">Windows</a></li>
  <li><a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/">MacOS</a></li>
  <li><a href="https://docs.mongodb.com/manual/administration/install-on-linux/">Linux</a></li>
</ul>
## Installation

```bash
$ npm install
```

# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Testing websockets 
Open file <b>static/index.html</b> in your browser. <br/>
In my case it is `file:///C:/projects/nest-graphql/static/index.html`
