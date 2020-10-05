export default {
  Service: {
    reqUser: async ({ id }, __, { prisma }) =>
      await prisma.service.findOne({ where: { id } }).reqUser(),
    ansUser: async ({ id }, __, { prisma }) =>
      await prisma.service.findOne({ where: { id } }).ansUser(),
    serviceimgfiles: async ({ id }, __, { prisma }) =>
      await prisma.serviceimgfiles.findMany({ where: { serviceId: id } }),
  },
};
