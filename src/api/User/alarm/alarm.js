export default {
  Mutation: {
    alarm: async (_, { change }, { request, isAuthenticated, prisma }) => {
      const user = isAuthenticated(request.res.req);

      try {
        await prisma.user.update({
          where: {id: user.id},
          data: {alarm: change}
        });

        return true;
      } catch (error) {
        return error;
      }
    }
  }
}