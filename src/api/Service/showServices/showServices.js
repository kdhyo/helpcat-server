export default {
  Query: {
    showServices: async (_, args, { prisma }) => {
      const services = await prisma.service.findMany({
        orderBy: {
          id: args.orderBy,
        },
      });
      return services;
    },
  },
};
