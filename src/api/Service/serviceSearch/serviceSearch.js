export default {
  Query: {
    serviceSearch: async (_, args, { prisma, isAuthenticated, request }) => {
      isAuthenticated(request.res.req);
      const { id } = args;

      return await prisma.service.findOne({ where: { id } });
    },
  },
};
