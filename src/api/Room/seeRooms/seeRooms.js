export default {
  Query: {
    seeRooms: async (_, __, { prisma, isAuthenticated, request }) => {
      const user = isAuthenticated(request.res.req);

      try {
        const rooms = await prisma.room.findMany({
          where: {
            useronroom: {
              some: { user: { id: user.id } },
            },
          },
        });

        if (!rooms) return new Error("채팅방 정보가 존재하지 않습니다.");

        console.log(rooms);
        return rooms;
      } catch (error) {
        return error;
      }
    },
  },
};
