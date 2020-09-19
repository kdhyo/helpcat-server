import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const verifyUser = async (payload, done) => {
  try {
    console.log(payload);
    const user = await prisma.user.findOne({ where: { email: payload.email } });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    console.log(error);
    return done(error, false);
  }
};

export const authenticateJwt = (request, res, next) =>
  passport.authenticate("jwt", { sessions: false }, (error, user) => {
    if (user) {
      request.user = user;
    }
    next();
  })(request, res, next);

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
