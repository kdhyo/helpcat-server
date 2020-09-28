export default {
  Service: {
    reqUser: async ({ id }, __, { prisma }) =>
      await prisma.Service.findOne({ where: { id } }).reqUser(),
    ansUser: async ({ id }, __, { prisma }) =>
      await prisma.Service.findOne({ where: { id } }).ansUser(),
  },
};
