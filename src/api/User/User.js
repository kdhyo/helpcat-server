export default {
  User: {
    reqServices: async ({ id }, __, { prisma }) =>
      await prisma.Service.findMany({ where: { reqUserId: id } }),
    ansServices: async ({ id }, __, { prisma }) =>
      await prisma.Service.findMany({ where: { ansUserId: id } }),
  },
};
