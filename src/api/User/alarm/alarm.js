export default {
  Mutation: {
    alarm: async (_, args, { request, prisma, isAuthenticated }) => {
      const user = isAuthenticated(request.res.req);
      try {
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            alarm: args.change,
          },
        });

        return true;
      } catch (error) {
        return error;
      }
    },
  },
};
