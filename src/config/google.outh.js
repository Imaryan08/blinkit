// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// require("dotenv").config();
// const { v4: uuidv4 } = require('uuid');
// const passport = require("passport")
// const User = require('../module/user.module')




// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/google/callback"
//   },
//   async function(accessToken, refreshToken, profile, cb) {
//     var user = await User.findOne({email:profile?._json?.email}).lean().exec()
//     if(!user)
//     {
        
//         user = await User.create({
//             fullName:profile?._json?.name,
//             email:profile?._json?.email,
//             password:uuidv4(),
//             role:["custmor"]
//         })
//     }
//     console.log(user)
//       return cb(null, user);
//   }
// ));

// module.exports = passport;