
## Build with
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) for testing
* [Dbms mongoDB](db_sipPos.sql)

## Package
* [cookie-session](https://www.npmjs.com/package/cookie-session)
* [ejs](https://www.npmjs.com/package/ejs)
* [googleapis](https://www.npmjs.com/package/cors)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [mongoose](https://www.npmjs.com/package/jsonwebtoken)
* [nodemailer](https://www.npmjs.com/package/morgan)
* [passport](https://www.npmjs.com/package/multer)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20)

## Project setup

```
npm install
```

### Install nodemon

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

If you have already installed, skip this step.

```
npm install -g nodemon
```

### Setup .env example

Create .env file in your root project folder.

```
YOUREMAIL = denykun666@gmail.com
YOUREMAILPASS = OdozX014D@gmail.com
YOURNAME = Deni Irawan Nugraha
PORT = 3000
```
### create folder uploads in your root project folder.
### Run project for development
```
root/uploads
```
### crete keys.js file at root/config/here
```
// add this file to .gitignore
module.exports = {
        google: {
            clientID:  'your client id',
            clientSecret: 'your client secret',
            clientRefreshToken: 'your google refresh token',
            callbackURL: '/auth/google/redirect'
//you can have client id, secret token and refresh token at https://console.developers.google.com
        },
        mongodb: {
            dbURI: 'mongodb+srv://Odoz54321:Odoz54321@jaeger.tlukl.mongodb.net/jeager?retryWrites=true&w=majority'
        },
        session: {
            cookieKey: "your cookie key you can input any random string with no spacing"
        }
}

```
for run this application
```
npm run dev
```
