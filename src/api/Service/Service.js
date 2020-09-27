export default {
  Service: {
    reqUser: ({ id }, __, { prisma }) => prisma.service.findOne({ where: { id } }).reqUser(),
    ansUser: ({ id }, __, { prisma }) => prisma.service.findOne({ where: { id } }).ansUser(),
  },
};
