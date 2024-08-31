const User = require("../models/users");
const jwt = require("jwt-simple");
const config = require("../config");

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      int: timestamp,
    },
    config.secret
  );
};

exports.signin = (req, res, next) => {
  const user = req.user;
  res.send({token: tokenForUser(user), user_id: user._id});
};

exports.signup = (req, res, next) => {
  const {email, password} = req.body;
  if (email || !password) {
    return res
      .status(422)
      .json({error: "Please provide your email and password"});
  }

  User.findOne({email: email}, (error, existingUser) => {
    if (error) {
      return next(error);
    }
    if (existingUser) {
      return res.status(422).json({error: "Email is already being used"});
    }

    const user = new User({
      email: email,
      password: password,
    });

    user.save((error) => {
      if (error) {
        return next(error);
      }
      res.json({user_id: user._id, token: tokenForUser(user)});
    });
  });
};
