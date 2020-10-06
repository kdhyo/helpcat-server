export default {
  Service: {
    reqUser: async ({ id }, __, { prisma }) =>
      await prisma.service.findOne({ where: { id } }).reqUser(),
    ansUser: async ({ id }, __, { prisma }) =>
      await prisma.service.findOne({ where: { id } }).ansUser(),
    serviceimgfiles: async ({ id }, __, { prisma }) =>
      await prisma.serviceimgfiles.findMany({ where: { serviceId: id } }),
    rating: async ({ id }, __, { prisma }) => {
      console.log(id);
      return await prisma.rating.findOne({ where: { serviceId: id } });
    },
  },
};
