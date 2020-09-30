export default {
  Room: {
    UserOnRoom: async ({ id }, __, { prisma }) => {
      console.log(id);
      return await prisma.Room.findMany({ where: { id } });
    },
  },
};
