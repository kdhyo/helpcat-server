export default {
  Rating: {
    rating_reqUser: async ({ reqUserId }, __, { prisma }) => {
      return await prisma.user.findOne({ where: { id: reqUserId } });
    },
    rating_ansUser: async ({ ansUserId }, __, { prisma }) => {
      return await prisma.user.findOne({ where: { id: ansUserId } });
    },
    service: async ({ serviceId }, __, { prisma }) => {
      return await prisma.service.findOne({ where: { id: serviceId } });
    },
  },
};
