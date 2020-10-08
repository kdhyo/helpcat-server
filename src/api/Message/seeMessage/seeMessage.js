export default {
  Query: {
    messages: async (_, { room }, { request, isAuthenticated, prisma }) => {
      isAuthenticated(request.res.req);

      return await prisma.message.findMany({ where: { room } });
    },
  },
};
