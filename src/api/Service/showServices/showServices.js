export default {
  Query: {
    showServices: async (_, args, { prisma }) => {
      const services = await prisma.Service.findMany({
        orderBy: {
          id: args.orderBy,
        },
      });
      return services;
    },
  },
};
