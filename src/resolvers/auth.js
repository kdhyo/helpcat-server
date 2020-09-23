import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../config/middlewares";
import crypto from "crypto";

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const validateEmailToken = crypto.randomBytes(64).toString("hex");

  try {
    const user = await context.prisma.user.create({
      data: {
        ...args,
        validateEmailToken,
        password,
      },
    });

    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET
    );

    return {
      token,
      user,
    };
  } catch (error) {
    return new Error(error);
  }
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findOne({
    where: {
      email: args.userid,
    },
  });
  if (!user) return new Error("아이디가 존재하지 않습니다.");

  const pwdCheck = await bcrypt.compare(args.password, user.password);
  if (!pwdCheck) return new Error("비밀번호가 올바르지 않습니다.");

  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET
  );
  return {
    token,
    user,
  };
}

async function UserDelete(parent, args, { request, prisma }, info) {
  try {
    const user = isAuthenticated(request.res.req);
    await prisma.user.delete({
      where: { id: user.id },
    });

    return true;
  } catch (error) {
    return new Error(error);
  }
}

async function updatePassword(parent, { oldPassword, newPassword }, { request, prisma }, info) {
  try {
    const oldUser = isAuthenticated(request.res.req);
    const oldPasswordValid = await bcrypt.compare(oldPassword, oldUser.password);
    if (!oldPasswordValid) {
      throw new Error("패스워드가 일치하지 않습니다.");
    }
    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: oldUser.id },
      data: { password: newPasswordHash },
    });

    return true;
  } catch (error) {
    return new Error(error);
  }
}

module.exports = {
  signup,
  login,
  UserDelete,
  updatePassword,
};
