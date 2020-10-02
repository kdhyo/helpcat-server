import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, args, { prisma }) => {
      const { email, password } = args;

      const user = await prisma.user.findOne({
        where: {
          email,
        },
      });
      if (!user) return new Error("아이디가 존재하지 않습니다.");

      const pwdCheck = await bcrypt.compare(password, user.password);
      if (!pwdCheck) return new Error("비밀번호가 올바르지 않습니다.");

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1 days",
      });
      return {
        token,
        user,
      };
    },
  },
};
