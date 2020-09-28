export default {
  Mutation: {
    emailAuth: async (_, args, { prisma }) => {
      const { validateEmailToken } = args;
      try {
        const userCheck = await prisma.user.findOne({
          where: {
            validateEmailToken,
          },
        });

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
        await prisma.user.update({
          where: {
            validateEmailToken: args.validateEmailToken,
          },
          data: { emailvalidated: true },
        });

        return true;
      } catch (error) {
        return error;
      }
    },
  },
};
