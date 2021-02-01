const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');
const sendEmail = require('./nodemailer')

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: keys.google.callbackURL

    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                console.log(`user : ${currentUser} is Log in`)
            }else{
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    thumbnail: profile._json.picture,
                    email: profile._json.email
                }).save().then((newUser) => {
                    const email = profile._json.email
                    console.log('created new user: ', newUser);
                    sendEmail.sendMail(email);
                    done(null, newUser);
                });
            }
        });
    })
);
