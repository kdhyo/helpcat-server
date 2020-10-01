export default {
  Mutation: {
    addReview: async (_, args, { request, isAuthenticated, prisma }) => {
      isAuthenticated(request.res.req);
      const { userId, review, rating } = args;
      let ratingSum = 0;

      try {
        const addRating = await prisma.rating.create({
          data: {
            review,
            rating,
            user: {
              connect: { id: userId },
            },
          },
        });

        const updateRating = await prisma.rating.findMany({
          where: { userId },
        });

        /* 너 딱기다려 */
        updateRating.forEach((data) => {
          ratingSum += data.rating;
        });

        // 평점 평균 구하기
        const ratingAvg = ratingSum / updateRating.length;

        await prisma.user.update({
          where: { id: userId },
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
