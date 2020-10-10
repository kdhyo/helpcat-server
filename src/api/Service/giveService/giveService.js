export default {
  Mutation: {
    giveService: async (_, { id }, { request, prisma, isAuthenticated }) => {
      const user = isAuthenticated(request.res.req);

      try {
        const check = await prisma.service.findOne({ where: { id } });
        if (check.ansUserId) return new Error("이미 진행중인 서비스 입니다.");

        const updateService = await prisma.service.update({
          where: { id },
          data: {
            ansUser: { connect: { id: user.id } },
          },
        });

        console.log(updateService);

        await prisma.room.create({
          data: {
            useronroom: {
              create: [
                {
                  user: { connect: { id: updateService.reqUserId } },
                  service: { connect: { id } },
                },
                {
                  user: { connect: { id: updateService.ansUserId } },
                  service: { connect: { id } },
                },
              ],
            },
          },
        });

        return updateService;
      } catch (error) {
        return new Error(error);
      }
    },
  },
};
