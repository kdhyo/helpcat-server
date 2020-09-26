import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../config/middlewares";
import crypto from "crypto";
import { sendWelcomeEmail } from "../emailGenerator";

// 회원가입
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

    // 인증 이메일 전송
    sendWelcomeEmail(user, context);

    return true;
  } catch (error) {
    return error;
  }
}

// 로그인
async function login(parent, args, context, info) {
  const user = await context.prisma.user.findOne({
    where: {
      email: args.userid,
    },
  });
  if (!user) return new Error("아이디가 존재하지 않습니다.");

  const pwdCheck = await bcrypt.compare(args.password, user.password);
  if (!pwdCheck) return new Error("비밀번호가 올바르지 않습니다.");

  if (!user.emailvalidated) {
    // 인증 이메일 전송
    sendWelcomeEmail(user, context);
    return new Error(
      "인증 메일을 보내드렸습니다. 이메일 인증해주시길 바랍니다."
    );
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return {
    token,
    user,
  };
}

//유저 삭제
async function UserDelete(parent, args, { request, prisma }, info) {
  try {
    const user = isAuthenticated(request.res.req);
    await prisma.user.delete({
      where: { id: user.id },
    });

    return true;
  } catch (error) {
    return error;
  }
}

// 유저 패스워드 변경
async function updatePassword(
  parent,
  { oldPassword, newPassword },
  { request, prisma },
  info
) {
  try {
    const oldUser = isAuthenticated(request.res.req);
    const oldPasswordValid = await bcrypt.compare(
      oldPassword,
      oldUser.password
    );
    if (!oldPasswordValid) {
      return new Error("패스워드가 일치하지 않습니다.");
    }
    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: oldUser.id },
      data: { password: newPasswordHash },
    });

    return true;
  } catch (error) {
    return error;
  }
}

// 이메일 인증 후 로그인
async function validateEmail(parent, args, context, info) {
  try {
    const userCheck = await context.prisma.user.findOne({
      where: {
        validateEmailToken: args.validateEmailToken,
      },
    });

    console.log(userCheck);

    if (!userCheck) {
      return new Error(`존재하지 않는 유저 입니다.`);
    } else {
      if (userCheck.emailvalidated) {
        return new Error(`올바르지 않은 접근입니다.`);
      }
    }
  } catch (error) {
    return ` try ${error}`;
  }

  try {
    const user = await context.prisma.user.update({
      where: {
        validateEmailToken: args.validateEmailToken,
      },
      data: { emailvalidated: true },
    });

    console.log(user);
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    return {
      token,
      user,
    };
  } catch (error) {
    return error;
  }
}

module.exports = {
  signup,
  login,
  UserDelete,
  updatePassword,
  validateEmail,
};
