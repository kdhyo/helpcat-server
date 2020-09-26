export default {
  Service: {
    reqUser: (parent, __, { prisma }) =>
      prisma.service.findOne({ where: { id: parent.id } }).reqUser(),
  },
};
