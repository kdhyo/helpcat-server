export default {
  Query: {
    seeReviews: async (_, args, { prisma }) => {
      const reviews = await prisma.rating.findMany({
        orderBy: {
          id: args.orderBy,
        },
      });
      return reviews;
    },
  },
};
