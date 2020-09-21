# Explore MERN
Sample application for learning the MonogDb, Express, React, and Node.js stack with authentication using passport and JWTs.
# Contents
* [About](#About)
* [Getting Started](#Getting-Started)
	* [Configuration](#Configuration)
	* [Quick Start](#Quick-Start)
* [References](#References)
# About
This Project uses the following technologies:
* Frontend: [React](https://reactjs.org/) and [React Router](https://reactrouter.com/)
* Backend: [Express](https://expressjs.com/) and [Node](https://nodejs.org/en/)
* Database: [MongoDB](https://www.mongodb.com)
* State Management: [Redux](https://redux.js.org/)
# Getting Started
## Configuration
Make sure to Make sure to add your own MONGOURI from your [mLab](https://mlab.com/) database in config/keys.js.
```javascript
module.exports = {
  mongoURI: 'YOUR_MONGO_URI_HERE',
  secretOrKey: 'secret'
}
```
1. Install dependencies
* ```cd client && npm i```
* ```cd ../ && npm i```
2. Start local server(s) for local development
* Start the server on port 5000 and the client on port 3000 ```npm run dev```
## Quick Start
```
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```
# References
* [mern-auth](https://github.com/rishipr/mern-auth/)
* [Blog for help setting up the Db with mongo](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)