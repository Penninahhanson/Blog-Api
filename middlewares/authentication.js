const UserModel = require("../models/userData");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../config");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      APP_SECRET,
      async (err, decodedToken) => {
        if (err) {
          res.render('login')
          return;
        } else {
          const user = await UserModel.findById(decodedToken.id);
          if (user){
           res.render('createPost')
          }else{
             return res.render('login')
          }
          next();
        }
      }
    );
  } else {
    res.render('login');
    next();
  }
}