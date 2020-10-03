export default {
  Mutation: {
    detailService: async (_, { serviceId }, { prisma }) => {
      try {
        return await prisma.service.findOne({
          where: {
            id: serviceId,
          },
        });
      } catch (error) {
        return error;
      }
    },
  },
};
