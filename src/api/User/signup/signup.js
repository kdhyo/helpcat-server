import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "../../../emailGenerator";

export default {
  Mutation: {
    signup: async (_, args, { prisma }) => {
      const password = await bcrypt.hash(args.password, 10);
      const validateEmailToken = Math.random().toString(36).substr(2, 8);
      try {
        const check = await prisma.user.count({
          where: {
            OR: [{ email: args.email }, { nickName: args.nickName }],
          },
        });
        if (check) return new Error("이메일 혹은 닉네임이 이미 존재합니다.");
        const user = await prisma.user.create({
          data: {
            ...args,
            password,
            validateEmailToken,
          },
        });
        await sendWelcomeEmail(user);
        return true;
      } catch (error) {
        return error;
      }
    },
  },
};
