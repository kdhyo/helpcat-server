import bcrypt from "bcryptjs";

export default {
  Mutation: {
    signup: async (_, args, { prisma }) => {
      // 패스워드 암호화 작업
      const password = await bcrypt.hash(args.password, 10);

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
          },
        });

        return user;
      } catch (error) {
        return error;
      }
    },
  },
};
