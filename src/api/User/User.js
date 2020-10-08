export default {
  User: {
    reqUser: async ({ id }, __, { prisma }) =>
      await prisma.service.findMany({ where: { reqUserId: id } }),
    ansUser: async ({ id }, __, { prisma }) =>
      await prisma.service.findMany({ where: { ansUserId: id } }),
    rating_reqUser: async ({ id }, __, { prisma }) =>
      await prisma.rating.findMany({ where: { reqUserId: id } }),
    rating_ansUser: async ({ id }, __, { prisma }) =>
      await prisma.rating.findMany({ where: { ansUserId: id } }),
    rating: async ({ id }, __, { prisma }) =>
      await prisma.rating.findMany({
        where: {
          OR: [{ ansUserId: id }, { reqUserId: id }],
        },
      }),
  },
};
