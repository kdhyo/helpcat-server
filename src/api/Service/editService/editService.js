export default {
  Mutation: {
    editService: async (_, args, { prisma, isAuthenticated, request }) => {
      const user = isAuthenticated(request.res.req);
      const userId = user.id;
      const {
        id,
        title,
        contents,
        price,
        address1,
        address2,
        lat,
        lon,
        addImgs,
        removeImgs,
        startAt,
        endAt,
      } = args;

      try {
        // 존재하는 게시글인지 확인.
        const service = await prisma.service.findOne({
          where: {
            id,
          },
        });
        if (!service) return new Error("게시글이 존재하지 않습니다.");

        //게시글 아이디와 로그인된 아이디가 같은지 확인
        if (service.reqUserId === userId) {
          await prisma.service.update({
            where: { id },
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
            },
          });

          //추가할 이미지 있으면 추가
          if (addImgs) {
            addImgs.forEach(async (imglink) => {
              await prisma.serviceimgfiles.create({
                data: {
                  service: {
                    connect: { id: service.id },
                  },
                  imglink,
                },
              });
            });
          }
          
          // 삭제할 이미지 있으면 삭제
          if (removeImgs) {
            removeImgs.forEach(async (imglink) => {
              await prisma.serviceimgfiles.delete({
                where: { imglink },
              });
            });
          }

          return true;
        } else {
          return new Error("게시글 작성자가 아닙니다.");
        }
      } catch (error) {
        return new Error(error);
      }
    },
  },
};
