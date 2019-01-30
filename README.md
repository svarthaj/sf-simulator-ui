# Smart Factory Simulation UI

The SF Simulation UI is a simple web based user interface for the [Simulation Tool](https://github.com/svarthaj/sf-simulator). This is part of a bigger project about managing and modeling custom Smart Factory scenarios.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project is written in Javascript and uses ExpressJS as the framework. Since Express is based on NodeJS you need to install both. First install Node and the Node Package Manager

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
And then use NPM to install Express

```
npm install express
```

The last step is to set the MongoDB Replica Set used for data storage. First you need to install MongoDB. On Ubuntu, the best option is to install the package maintained by MongoDB Inc. itself. This can be easily done following their [tutorial page](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/). After all is done, you need to create the directories for your DB. On Ubuntu running
```
sudo mkdir -p /data/db /data/log
```

Finally you can deploy the database with
```
sudo mongod --replSet rs0
```

### Installing

There is no installation. To get the UI running you can run this command from the project directory
```
node app.js
```
By default, the server will run on port ```8000```, but this can be configured. To check if everything is running visit ```localhost:8000```.

## Built With

* [Express](https://expressjs.com/) - Web Framework for JS
* [NODE.js](https://nodejs.org/en/) - JS Framework
* [MongoDB](https://www.mongodb.com/) - Object Database

## Authors

* **Mathias Mormul** - *Project Leader* -
* **Lucas Leal** - *Initial work* - [Svarthaj](https://github.com/Svarthaj)

