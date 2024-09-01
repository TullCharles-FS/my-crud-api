/*const passport = require("passport");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStragtegy = require('passport-local');

const User = require("../models/users");
const config = require("../config");

const localOptions = {
  usernameField: 'email'
}

const localStrategy = new LocalStragtegy(localOptions, function(email, password, done){
 User.findOne({email: email}, function(error, user){
   if(error) {return done(error)}
   if(!user) {return done(null, false)}
   user.comparePassword(password, function(error, isMatch){
    if(error) {return done(error)}
    if(isMatch) {return done(null, false)}
    return done(null, user);
    })
 })
})

const jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
};

const JwtStrategy = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub, function (error, user) {
    if (error) {
      return done(error, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});


passport.use(localStrategy)
passport.use(JwtStrategy);*/
