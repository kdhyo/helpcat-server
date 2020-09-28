export default {
  Mutation: {
    editUser: async (_, args, { prisma, isAuthenticated, request }) => {
      const user = isAuthenticated(request.res.req);
      const id = user.id;
      try {
        await prisma.user.update({
          where: {
            id,
          },
          data: {
            ...args,
          },
        });

        return true;
      } catch (error) {
        return error;
      }
    },
  },
};
