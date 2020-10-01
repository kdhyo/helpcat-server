export default {
  Mutation: {
    finishService: async (_, { id }, { request, prisma, isAuthenticated }) => {
      const user = isAuthenticated(request.res.req);

      try {
        const serviceData = await prisma.service.findOne({ where: { id } });
        if (serviceData.reqUserId !== user.id) return new Error("접근권한이 없습니다.");

        await prisma.service.update({ where: { id }, data: { progress: true } });

        return true;
      } catch (error) {
        return error;
      }
    },
  },
};
