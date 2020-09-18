import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getUserId } from "../utils";
import crypto from "crypto";

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const validateEmailToken = crypto.randomBytes(64).toString("hex");
  console.log(validateEmailToken);

  try {
    const user = await context.prisma.user.create({
      data: {
        ...args,
        validateEmailToken,
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

async function UserDelete(parent, args, context, info) {
  try {
    const userId = getUserId(context);
    console.log(userId);
    await context.prisma.user.delete({
      where: { id: userId },
    });

    return {
      code: 200,
      message: "회원이 탈퇴되었습니다.",
    };
  } catch (error) {
    return new Error(error);
  }
}

async function updatePassword(parent, { oldPassword, newPassword }, context, info) {
  try {
    const userId = getUserId(context);
    const user = await context.prisma.user.findOne({ where: { id: userId } });
    const oldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!oldPasswordValid) {
      throw new Error("패스워드가 일치하지 않습니다.");
    }
    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    await context.prisma.user.update({
      where: { id: userId },
      data: { password: newPasswordHash },
    });

    return {
      code: 200,
      result: user,
      message: "비밀번호가 변경되었습니다.",
    };
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
