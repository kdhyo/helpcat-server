export default {
  Mutation: {
    giveService: async (_, { id }, { request, prisma, isAuthenticated }) => {
      const user = isAuthenticated(request.res.req);

      try {
        const check = await prisma.Service.update({
          where: { id },
          data: {
            progress: true,
            ansUser: { connect: { id: user.id } },
          },
        });

        return check;
      } catch (error) {
        return new Error(error);
      }
    },
  },
};
