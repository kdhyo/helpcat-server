export default {
  Query: {
    seeRooms: async (_, __, { prisma, isAuthenticated, request }) => {
      const user = isAuthenticated(request.res.req);

      const rooms = await prisma.userOnRoom.findMany({
        where: { userId: user.id },
      });

      console.log(rooms);
      return rooms;
    },
  },
};
