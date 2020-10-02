import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    signup: async (_, args, { prisma }) => {
      // 패스워드 암호화 작업
      const password = await bcrypt.hash(args.password, 10);
      try {
        const user = await prisma.user.create({
          data: {
            ...args,
            password,
          },
        });

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1 days",
        });

        return {
          token,
          user,
        };
      } catch (error) {
        return error;
      }
    },
  },
};
