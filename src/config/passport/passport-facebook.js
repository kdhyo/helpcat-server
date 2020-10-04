// import passport from "passport";
// import { Strategy as FacebookStrategy } from "passport-facebook";
// import { PrismaClient } from "@prisma/client";

// // const prisma = new PrismaClient();

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//       callbackURL: "http://localhost:4000/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       console.log(profile);
//       return cb(null, profile);
//     }
//   )
// );
