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

## Project Details
This section is reserved for explaining the file organization of the Project.

### How to add new functions
Since this interface works on top of the (SF-Simulator)[https://github.com/svarthaj/sf-simulator] all the functions defined in the UI must be compatible with the ones defined in the simulator. Ideally, this coupling should be automatic, but for now it must be done manually by the programmer.

Therefore, to add new functions some details must be taken in consideration:
1. Add the function details to a switch case inside the function ```overlayOn``` defined in ```views/index.ejs```.
1. The order of the function attributes must be the same as defined on the Simulator.

### To-do's
1. Implement the *Manage* tab. This should allow the user to see every simulation in the DB and give them the option to Start/Stop publishing data with each one of them.
1. Polish the list of current added functions (e.g. adding editing capabilities).
1. Add the rest of the functions.
1. Implement some constraints for Topic and Queue name. Ideally it should check in the DB to see what names have been used. This is important to avoid function overlapping.


## Built With

* [Express](https://expressjs.com/) - Web Framework for JS
* [NODE.js](https://nodejs.org/en/) - JS Framework
* [MongoDB](https://www.mongodb.com/) - Object Database

## Authors

* **Mathias Mormul** - *Project Leader* - [Mormulms](https://github.com/mormulms)
* **Lucas Leal** - *Initial work* - [Svarthaj](https://github.com/Svarthaj)

