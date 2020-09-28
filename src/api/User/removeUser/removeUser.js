export default {
  Mutation: {
    removeUser: async (_, __, { request, isAuthenticated, prisma }) => {
      try {
        const user = isAuthenticated(request.res.req);
        await prisma.User.delete({
          where: { id: user.id },
        });

        return true;
      } catch (error) {
        return error;
      }
    },
  },
};
