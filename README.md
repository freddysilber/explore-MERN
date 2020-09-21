# Explore MERN
Sample application for learning the MonogDb, Express, React, and Node.js stack with authentication using passport and JWTs.
# Getting Started
## Configureation
Make sure to Make sure to add your own MONGOURI from your [mLab](https://mlab.com/) database in config/keys.js.
```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```
1. Install dependencies
* ```cd client && npm i```
* ```cd ../ && npm i```
2. Start local server(s) for local development
* Start the server on port 5000 and the client on port 3000 ```npm run dev```
# References
mern-auth:
[mern-auth](https://github.com/rishipr/mern-auth/)
MongoDb note:
[Blog for help setting up the Db with mongo](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)