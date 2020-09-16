import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { APP_SECRET, getUserId } from "../utils";

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
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findOne({
    where: {
      userid: args.userid,
    },
  });
  if (!user) return new Error("아이디가 존재하지 않습니다.");

  const pwdCheck = await bcrypt.compare(args.password, user.password);
  if (!pwdCheck) return new Error("비밀번호가 올바르지 않습니다.");

  const token = jwt.sign(
    {
      userId: user.id,
    },
    APP_SECRET
  );
  return {
    token,
    user,
  };
}

async function UserDelete(parent, args, context, info) {
  try {
    const userId = getUserId(context);
    await prisma.user.delete({
      where: { id: userId },
    });

    return {
      code: 200,
      result: user,
      message: "회원가입에 성공하였습니다.",
    };
  } catch (error) {
    return new Error(error);
  }
}

async function updatePassword(parent, { oldPassword, newPassword }, context, info) {
  const userId = getUserId(context);

  const user = await prisma.user.findOne({ where: { id: userId } });

  const oldPasswordValid = await bcrypt.compare(oldPassword, user.password);

  if (!oldPasswordValid) {
    throw new Error("패스워드가 일치하지 않습니다.");
  }

  const newPasswordHash = await bcrypt.hash(newPassword, 10);

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { password: newPasswordHash },
    });
  } catch (error) {
    return new Error(error);
  }
  return user;
}

exports = {
  signup,
  login,
  UserDelete,
  updatePassword,
};
