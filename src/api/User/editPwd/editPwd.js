import bcrypt from "bcryptjs";

export default {
  Mutation: {
    editPwd: async (_, { oldPwd, newPwd }, { request, isAuthenticated, prisma }) => {
      try {
        const user = isAuthenticated(request.res.req);
        const oldPwdCheck = await bcrypt.compare(oldPwd, user.password);
        if (!oldPwdCheck) {
          return new Error("패스워드가 일치하지 않습니다.");
        }
        const password = await bcrypt.hash(newPwd, 10);
        await prisma.User.update({
          where: { id: user.id },
          data: { password },
        });

        return true;
      } catch (error) {
        return error;
      }
    },
  },
};
