export default {
  Query: {
    userSearch: async (_, { id }, { prisma }) => {
      try {
        return await prisma.user.findOne({ where: { id } });
      } catch (error) {
        return error;
      }
    },
  },
};
