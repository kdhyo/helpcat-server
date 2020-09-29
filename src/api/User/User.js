export default {
  User: {
    reqUser: async ({ id }, __, { prisma }) =>
      await prisma.service.findMany({ where: { reqUserId: id } }),
    ansUser: async ({ id }, __, { prisma }) =>
      await prisma.service.findMany({ where: { ansUserId: id } }),
  },
};
