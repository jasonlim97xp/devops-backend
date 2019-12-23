<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jasonlim97xp/devops-backend">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Logo" width="200" height="100">
  </a>

  <h3 align="center">NodeJS Backend Server</h3>

  <p align="center">
    DevOps Application Backend System
    <br />
    <a href="https://github.com/jasonlim97xp/devops-backend"><strong>Explore the docs »</strong></a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Live Demo](#live-demo)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

This is a simple backend system that uses NodeJS alongside Express which would served as API for a mobile application. It has these functionalities:
- Login
- Register
- Get all the names of registered users

### Built With

* [NodeJS]()
* [Express]()
* [Mongoose](https://github.com/Automattic/mongoose)
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)
* [joi](https://github.com/hapijs/joi)
* [Passport JS](http://www.passportjs.org/)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Node & Npm

Head over to Node.js official website (https://nodejs.org/en/download/) to download and install Node. 
Once installed, launch your terminal / command prompt and type to verify that your node installation success.

```sh
node -v   
#v8.10.0
npm -v
#v5.6.0
```

* MongoDB

Head over to MongoDB official website (https://www.mongodb.com/download-center/community) and download the installation package based on your environment. 
Follow the guide below to setup MongoDB in your environment.
* [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
* [MacOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

### Installation
 
1. Head over to a directory and clone this repo
```sh
git clone https://github.com/jasonlim97xp/devops-backend
```
2. Install the dependency packages
```sh
npm install
```
3. Head over to app.js and ensure that mongoose connects to your local MongoDB
```sh
mongoose.connect('mongodb://localhost/yourdatabasenamehere',......
```
4. To launch, just type:
```sh
node app.js
```


<!-- USAGE EXAMPLES -->
## Live Demo

To test out the APIs, please refer to [Swagger API Documentation](http://ec2-18-219-240-129.us-east-2.compute.amazonaws.com:3000/api-docs/) 

_This project would be the backend system that would served as API for the mobile app that I've created here. [GitHub Repo](https://github.com/jasonlim97xp/devops-frontend)_


<!-- CONTACT -->
## Contact

Lim Zhen Shen - [Email](zhenshen.lim@digi.com.my)

Project Link: [https://github.com/jasonlim97xp/devops-backend](https://github.com/jasonlim97xp/devops-backend)
