import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const APP_SECRET = "Help-catServer";

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);

  try {
    const user = await context.prisma.user.create({
      data: {
        ...args,
        password,
      },
    });

    return {
      code: 200,
      result: user,
      message: "회원가입에 성공하였습니다.",
    };
  } catch (error) {
    return new Error(error);
  }
  // const token = jwt.sign({ userId: user.userid }, APP_SECRET);
}

module.exports = {
  signup,
};
