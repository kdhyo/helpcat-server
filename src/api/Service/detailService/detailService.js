export default {
  Mutation: {
    detailService: async (_, { serviceId }, { prisma }) => {
      try {
        const service = await prisma.service.findOne({
          where: {
            id: serviceId,
          },
        });

        const serviceImgFiles = await prisma.serviceimgfiles.findMany({ where: { serviceId } });

        return {
          service,
          serviceImgFiles,
        };
      } catch (error) {
        return error;
      }
    },
  },
};
