export default {
  Query: {
    seeRoom: async (_, args, { prisma, isAuthenticated, request }) => {
      const user = isAuthenticated(request.res.req);
      const { roomId } = args;
      try {
        const check = await prisma.useronroom.count({
          where: {
            AND: [
              {
                room: { id: roomId },
                user: { id: user.id },
              },
            ],
          },
        });
        if (!check) return new Error("회원님께서 접속하실 수 없는 채팅방입니다.");

        return await prisma.room.findOne({ where: { id: roomId } });
      } catch (error) {
        return error;
      }
    },
  },
};
