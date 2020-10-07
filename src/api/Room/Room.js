export default {
  Room: {
    UserOnRoom: async ({ id }, __, { prisma }) => {
      const users = await prisma.useronroom.findMany({ where: { roomId: id } });
      // console.log(users);
      return users;
    },
    message: async ({ id }, __, { prisma }) => {
      return await prisma.message.findMany({ where: { room: id } });
    },
  },
  UserOnRoom: {
    user: async ({ userId }, __, { prisma }) => {
      console.log(userId);
      return await prisma.user.findMany({
        where: { id: userId },
      });
    },
    room: async ({ roomId }, __, { prisma }) => {
      console.log(roomId);
      return await prisma.room.findOne({
        where: { id: roomId },
      });
    },
  },
};
