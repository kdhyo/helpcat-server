export default {
  Mutation: {
    addReview: async (_, args, { request, isAuthenticated, prisma }) => {
      const user = isAuthenticated(request.res.req);
      const { serviceId, review, rating } = args;
      let ratingSum = 0;

      try {
        const service = await prisma.service.findOne({ where: { id: serviceId } });
        const { reqUserId, ansUserId } = service;

        if (user.id !== reqUserId) return new Error("의뢰자만 작성할 수 있습니다.");

        // const check =

        const addRating = await prisma.rating.create({
          data: {
            review,
            rating,
            rating_reqUser: {
              connect: { id: reqUserId },
            },
            rating_ansUser: {
              connect: { id: ansUserId },
            },
            service: {
              connect: { id: serviceId },
            },
          },
        });

        const updateRating = await prisma.rating.findMany({
          where: { ansUserId },
        });

        /* 너 딱기다려 */
        updateRating.forEach((data) => {
          ratingSum += data.rating;
        });

        // 평점 평균 구하기
        const ratingAvg = ratingSum / updateRating.length;

        await prisma.user.update({
          where: { id: ansUserId },
          data: {
            ratingAvg,
            ratingCount: updateRating.length,
          },
        });

        return addRating;
      } catch (error) {
        return error;
      }
    },
  },
};
