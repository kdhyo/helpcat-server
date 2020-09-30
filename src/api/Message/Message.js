export default {
  Message: {
    fromTouser: async ({ from }, __, { prisma }) => {
      // console.log(`from: ${from}`);
      return await prisma.user.findOne({ where: { id: from } });
    },
    toTouser: async ({ to }, __, { prisma }) => {
      // console.log(`to: ${to}`);
      return await prisma.user.findOne({ where: { id: to } });
    },
    messageToroom: async ({ room }, __, { prisma }) => {
      // console.log(`message: ${room}`);
      return await prisma.room.findOne({ where: { id: room } });
    },
  },
};
