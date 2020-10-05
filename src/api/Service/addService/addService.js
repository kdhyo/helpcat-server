export default {
  Mutation: {
    addService: async (_, args, { request, prisma, pubsub, isAuthenticated }, info) => {
      const user = isAuthenticated(request.res.req);
      const userId = user.id;
      const {
        title,
        contents,
        price,
        address1,
        address2,
        lat,
        lon,
        imgFiles,
        startAt,
        endAt,
      } = args;

      try {
        const service = await prisma.service.create({
          data: {
            title,
            contents,
            price,
            address1,
            address2,
            lat,
            lon,
            startAt,
            endAt,
            reqUser: { connect: { id: userId } },
          },
        });

        // 이미지가 있을 시 이미지 저장
        if (imgFiles) {
          imgFiles.forEach(async (img) => {
            await prisma.serviceimgfiles.create({
              data: {
                service: {
                  connect: { id: service.id },
                },
                imglink: img,
              },
            });
          });
        }

        pubsub.publish("NEW_SERVICE", service);

        return true;
      } catch (error) {
        return new Error(error);
      }
    },
  },
};
