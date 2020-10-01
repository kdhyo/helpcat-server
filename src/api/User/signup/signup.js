import bcrypt from "bcryptjs";

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

        return user;
      } catch (error) {
        return error;
      }
    },
  },
};
