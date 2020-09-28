export default {
  User: {
    reqServices: async ({ id }, __, { prisma }) =>
      await prisma.service.findMany({ where: { reqUserId: id } }),
    ansServices: async ({ id }, __, { prisma }) =>
      await prisma.service.findMany({ where: { ansUserId: id } }),
  },
};
