export default {
  Room: {
    UserOnRoom: async ({ id }, __, { prisma }) => {
      return await prisma.userOnRoom.findMany({ where: { roomId: id } });
    },
    message: async ({ id }, __, { prisma }) => {
      return await prisma.message.findMany({ where: { room: id } });
    },
  },
  UserOnRoom: {
    user: async ({ userId }, __, { prisma }) => {
      return await prisma.user.findMany({
        where: { id: userId },
      });
    },
  },
};
