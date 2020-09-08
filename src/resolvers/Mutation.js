import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const APP_SECRET = "Help-catServer";

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const idCheck = await context.prisma.user.findOne({
    where: {
      email: args.email,
    },
  });

  if (idCheck) return new Error(`이미 존재하는 이메일입니다.`);

  const user = await context.prisma.user.create({
    data: {
      ...args,
      password,
    },
  });

  const token = jwt.sign({ userId: user.userid }, APP_SECRET);

  return {
    token,
    user,
  };
}

module.exports = {
  signup,
};
