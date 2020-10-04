// import passport from "passport";
// import { Strategy as KakaoStrategy } from "passport-kakao";
// import { PrismaClient } from "@prisma/client";

// // const prisma = new PrismaClient();

// passport.use(
//   new KakaoStrategy(
//     {
//       clientID: process.env.KAKAO_CLIENT_ID,
//       clientSecret: process.env.JWT_SECRET,
//       callbackURL: process.env.CALLBACK_URL,
//     },
//     async (_, __, profile, cb) => {
//       console.log(profile);
//       return cb(null, profile);
//     }
//   )
// );
